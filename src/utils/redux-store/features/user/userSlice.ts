import type { Session } from "next-auth";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  UserStateType,
  UserCartProdType,
  UserCartProdDataType,
} from "@/types/reduxTypes";
import type { resMessageType } from "@/types/resTypes";
import type { SchemaCartProduct } from "@/types/schemaTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userCart from "@/utils/userCart";
import handleCheckoutPrice from "@/utils/handleCheckoutPrice";
import handleCartQuantity from "@/utils/handleCartQuantity";

export const fetchDeleteCartProd = createAsyncThunk<
  string,
  UserCartProdType,
  { rejectValue: string }
>(
  "user/fetchDeleteCartProd",
  async (userCartProd: UserCartProdType, { rejectWithValue }) => {
    const { userId, id, cart } = userCartProd;
    const data = await userCart<resMessageType>(
      "PUT",
      userId,
      undefined,
      id,
      cart
    );

    if (data.status) {
      return rejectWithValue(data.message);
    }

    return data.message;
  }
);

export const fetchPurchaseProds = createAsyncThunk<
  string,
  string | undefined,
  { rejectValue: string }
>(
  "user/fetchPurchaseProds",
  async (userId: string | undefined, { rejectWithValue }) => {
    const data = await userCart<resMessageType>("DELETE", userId);

    if (data.status) {
      return rejectWithValue(data.message);
    }

    return data.message;
  }
);

export const fetchAddProd = createAsyncThunk<
  string,
  UserCartProdDataType,
  { rejectValue: string }
>(
  "user/fetchAddProd",
  async ({ userId, userCartProdData }, { rejectWithValue }) => {
    const data = await userCart<resMessageType>(
      "POST",
      userId,
      userCartProdData
    );

    if (data.status) {
      return rejectWithValue(data.message);
    }

    return data.message;
  }
);

const initialState: UserStateType = {
  user: null,
  loading: "idle",
  cart_products: [],
  checkout: {
    subResult: 0,
    taxResult: 0,
    totalPrice: 0,
  },
  totalQuantity: 0,
  isModal: false,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Session | null>) => {
      state.user = action.payload;
    },
    addCart: (state, action: PayloadAction<SchemaCartProduct[]>) => {
      state.cart_products = action.payload;

      handleCartQuantity(state);

      handleCheckoutPrice(state);
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: string; quantityValue: number }>
    ) => {
      const { id, quantityValue } = action.payload;

      state.cart_products = state.cart_products.map((product) =>
        product.id === id ? { ...product, quantity: quantityValue } : product
      );

      handleCartQuantity(state);

      handleCheckoutPrice(state);
    },
    handleModal: (state, action: PayloadAction<string | undefined>) => {
      state.isModal = !state.isModal;

      if (state.isModal) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }

      if (action.payload) {
        state.loading = "idle";
        state.message = action.payload;
      }
    },
  },
  extraReducers(builder) {
    //fetchDeleteCartProd
    builder.addCase(fetchDeleteCartProd.pending, (state) => {
      state.message = null;
    });

    builder.addCase(fetchDeleteCartProd.fulfilled, (state) => {
      state.message = null;
    });

    builder.addCase(
      fetchDeleteCartProd.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        if (action.payload) {
          state.message = action.payload;
        }
      }
    );

    // fetchPurchaseProds
    builder.addCase(fetchPurchaseProds.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(
      fetchPurchaseProds.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = "succeeded";

        if (action.payload) {
          state.message = action.payload;
        }
      }
    );

    builder.addCase(
      fetchPurchaseProds.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = "failed";

        if (action.payload) {
          state.message = action.payload;
        }
      }
    );

    //fetchAddProd
    builder.addCase(fetchAddProd.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(
      fetchAddProd.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = "succeeded";

        if (action.payload) {
          state.message = action.payload;
        }
      }
    );

    builder.addCase(
      fetchAddProd.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = "failed";

        if (action.payload) {
          state.message = action.payload;
        }
      }
    );
  },
});

export const { addUser, addCart, updateCart, handleModal } = userSlice.actions;

export default userSlice.reducer;
