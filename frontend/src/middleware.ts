import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// protect these paths:
export const config = { matcher: ["/dashboard/:path*", "/stream/:path*"] };

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  return NextResponse.next();
}
