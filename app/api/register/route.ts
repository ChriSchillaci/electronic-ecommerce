import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../../../models/user";

export async function POST(req: NextRequest) {
  let statusNumber = 500;

  try {
    const { email, password } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      statusNumber = 409;
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

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
