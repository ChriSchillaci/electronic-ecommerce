import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Product from "@/models/product";
import { SchemaProduct } from "@/types/schemaTypes";

dbConnect();
type SortType = "asc" | "desc" | null;
type SortByType = "price" | "rating" | null;

export async function GET(req: Request) {
  let statusNum = 500;
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const sort = url.searchParams.get("sort") as SortType;
    const sortBy = url.searchParams.get("sortby") as SortByType;
    const limit = url.searchParams.get("limit") || "9";
    const page = url.searchParams.get("page") || "1";

    const limitNum = Number(limit);
    const pageNum = Number(page);

    if (isNaN(pageNum) || isNaN(limitNum)) {
      statusNum = 400;
      throw new Error("Number is mandatory");
    }

    let searchQuery = {};
    let sortQuery = {};

    if (search) {
      searchQuery = { title: { $regex: search, $options: "i" } };
    }

    if (sortBy && sort) {
      sortQuery = { [sortBy]: sort === "asc" ? 1 : -1 };
    }

    const products: SchemaProduct[] = await Product.find(searchQuery)
      .sort(sortQuery)
      .limit(limitNum * 1)
      .skip((pageNum - 1) * limitNum);

    const countDocs = await Product.countDocuments();

    return NextResponse.json(
      {
        products,
        meta: {
          totalItems: countDocs,
          itemCount: products.length,
          totalPages: Math.ceil(countDocs / limitNum),
          currentPage: pageNum,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: statusNum }
      );
    }
  }
}
