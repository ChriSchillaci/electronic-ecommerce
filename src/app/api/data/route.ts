import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import dbConnect from "@/utils/db";
import Product from "@/models/product";
import type { SchemaProduct } from "@/types/schemaTypes";
import type { SortByType, SortType, CategoryType } from "@/types/queryTypes";

dbConnect();

export async function GET(req: NextRequest) {
  let statusNum = 500;
  try {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const sort = url.searchParams.get("sort") as SortType;
    const sortBy = url.searchParams.get("sortby") as SortByType;
    const limit = url.searchParams.get("limit") || "9";
    const page = url.searchParams.get("page") || "1";
    const category = url.searchParams.get("category") as CategoryType;

    const limitNum = Number(limit);
    const pageNum = Number(page);

    if (isNaN(pageNum) || isNaN(limitNum)) {
      statusNum = 400;
      throw new Error("Number is mandatory");
    }

    let searchQuery = {};
    let sortQuery = {};

    if (search) {
      searchQuery = {
        title: { $regex: search, $options: "i" },
      };
    }

    if (category) {
      searchQuery = {
        category: category,
      };
    }

    if (search && category) {
      searchQuery = {
        title: { $regex: search, $options: "i" },
        category: category,
      };
    }

    if (sortBy && sort) {
      sortQuery = { [sortBy]: sort === "asc" ? 1 : -1 };
    }

    const products: SchemaProduct[] = await Product.find(searchQuery)
      .sort(sortQuery)
      .limit(limitNum * 1)
      .skip((pageNum - 1) * limitNum);

    const countDocs = await Product.countDocuments(searchQuery);

    revalidatePath("/store");

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
