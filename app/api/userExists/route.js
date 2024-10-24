import User from "@/lib/models/User";
import connectMongo from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    await connectMongo();
    const { email } = await req.json();

    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error checking if user exists:", error);
  }
}
