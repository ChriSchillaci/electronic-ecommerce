import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  let statusNumber = 500;

  try {
    const { email, password } = await req.json();

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
      },
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        { message: e.message },
        { status: statusNumber }
      );
    }
  }
}
