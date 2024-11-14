import type { ParamsProp } from "@/types/pagesProps";
import type { SchemaCartProduct } from "@/types/schemaTypes";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET(req: NextRequest, { params }: ParamsProp) {
  let statusNumber = 500;

  try {
    const user = await db.users.findUnique({ where: { id: params.id } });

    if (!user) {
      statusNumber = 404;
      throw new Error("User not found");
    }

    return NextResponse.json(
      { cart_products: user.cart_products },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message, status: statusNumber },
        { status: statusNumber }
      );
    }
  }
}

export async function POST(req: NextRequest, { params }: ParamsProp) {
  let statusNumber = 500;

  try {
    const { id, title, image, quantity, price }: SchemaCartProduct =
      await req.json();

    if (!image || !quantity || !price) {
      statusNumber = 400;
      throw new Error("Properties missing");
    }

    const existingCartProduct = await db.users.findUnique({
      where: { id: params.id, cart_products: { some: { id } } },
    });

    if (existingCartProduct) {
      statusNumber = 409;
      throw new Error("Product already exists in the cart");
    }

    await db.users.update({
      where: { id: params.id },
      data: {
        cart_products: {
          push: { id, title, image, quantity, price },
        },
      },
    });

    return NextResponse.json(
      { message: "Product added to cart" },
      { status: 201 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message, status: statusNumber },
        { status: statusNumber }
      );
    }
  }
}

export async function PUT(req: NextRequest, { params }: ParamsProp) {
  let statusNumber = 500;

  try {
    const { id, cart }: { id: string; cart: SchemaCartProduct[] } =
      await req.json();

    const updatedUserCart = cart.filter((prod) => prod.id !== id);

    await db.users.update({
      where: { id: params.id },
      data: { cart_products: { set: updatedUserCart } },
    });

    return NextResponse.json({ message: "Cart updated" }, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message, status: statusNumber },
        { status: statusNumber }
      );
    }
  }
}

export async function DELETE(req: NextRequest, { params }: ParamsProp) {
  let statusNumber = 500;

  try {
    await db.users.update({
      where: { id: params.id },
      data: { cart_products: { set: [] } },
    });

    return NextResponse.json(
      { message: "Products purchased" },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message, status: statusNumber },
        { status: statusNumber }
      );
    }
  }
}
