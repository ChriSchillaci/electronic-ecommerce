import { NextResponse } from "next/server";
import { db } from "@/utils/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  let statusNumber = 500;

  try {
    const { id } = params;

    const isValidObjectId = (hexId: string) =>
      hexId.length === 24 && !isNaN(Number("0x" + hexId));

    if (!isValidObjectId(id)) {
      statusNumber = 400;
      throw new Error("id must be a valid 24-character hexadecimal ObjectId");
    }

    const product = await db.products.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
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
