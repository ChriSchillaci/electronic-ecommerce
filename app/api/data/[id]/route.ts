import { NextResponse } from "next/server";
import Product from "../../../../models/product";
import mongoose from "mongoose";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  let statusNumber = 500;

  try {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      statusNumber = 400;
      throw new Error("id must be of 24 characters");
    }

    const product = await Product.findById(id);

    if (product === null) {
      statusNumber = 404;
      throw new Error("Couldn't find the product");
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: statusNumber }
      );
    }
  }
}
