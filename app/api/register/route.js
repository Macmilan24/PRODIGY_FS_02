import User from "@/lib/models/User";
import connectMongo from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { email, password, role } = await req.json();
    const hahsedPass = await bcrypt.hash(password, 10);

    await connectMongo();
    await User.create({ email, password: hahsedPass, role });

    return NextResponse.json({ message: "User created" });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error creating user" }, { status: 500 })
    );
  }
}
