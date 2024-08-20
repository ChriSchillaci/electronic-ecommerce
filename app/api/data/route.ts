import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../utils/db";
import Product from "../../../models/product";
import type { SchemaProduct } from "../../../types/schemaTypes";
import type { SortByType, SortType, CategoryType } from "../../../types/queryTypes";

await dbConnect();

export async function GET(req: NextRequest) {
  let statusNum = 500;

  console.log("ESEGUITO");
  try {
    const search = req.nextUrl.searchParams.get("search");
    const sort = req.nextUrl.searchParams.get("sort") as SortType;
    const sortBy = req.nextUrl.searchParams.get("sortby") as SortByType;
    const limit = req.nextUrl.searchParams.get("limit") || "9";
    const page = req.nextUrl.searchParams.get("page") || "1";
    const category = req.nextUrl.searchParams.get("category") as CategoryType;
    
    console.log("Received query parameters:", { search, sort, sortBy, limit, page, category });

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
