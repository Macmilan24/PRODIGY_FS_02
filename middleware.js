import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!token && req.nextUrl.pathname !== "/auth/signin") {
    const signinUrl = new URL("/auth/signin", req.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!auth|_next|api|favicon\\.ico).*)"],
};
