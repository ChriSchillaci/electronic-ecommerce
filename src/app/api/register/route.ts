import type { SchemaUser } from "@/types/schemaTypes";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  let statusNumber = 500;

  try {
    const { email, password, first_name, last_name }: SchemaUser =
      await req.json();

    const existingUser = await db.users.findUnique({ where: { email } });

    if (existingUser) {
      statusNumber = 409;
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.users.create({
      data: {
        email,
        password: hashedPassword,
        first_name,
        last_name,
        cart_products: [],
      },
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        { message: err.message },
        { status: statusNumber }
      );
    }
  }
}
