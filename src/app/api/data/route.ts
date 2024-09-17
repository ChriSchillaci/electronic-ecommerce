import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { db } from "@/utils/db";
import type { SortByType, SortType, CategoryType } from "@/types/queryTypes";

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

    let whereClause = {};

    if (search) {
      whereClause = {
        title: {
          contains: search,
          mode: "insensitive",
        },
      };
    }

    if (category) {
      whereClause = {
        category,
      };
    }

    if (search && category) {
      whereClause = {
        title: {
          contains: search,
          mode: "insensitive",
        },
        category,
      };
    }

    const sortQuery =
      sortBy && sort ? { [sortBy]: sort === "asc" ? "asc" : "desc" } : {};

    const products = await db.products.findMany({
      where: whereClause,
      orderBy: sortQuery,
      take: limitNum,
      skip: (pageNum - 1) * limitNum,
    });

    const countDocs = await db.products.count({
      where: whereClause,
    });

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
