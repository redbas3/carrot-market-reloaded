import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if(pathname === "/") {
    const response = NextResponse.next();
    response.cookies.set("hello", "world");
    return response;
  }

  if(pathname === "/profile") {
    const session = await getSession();
    if(!session.id) {
      return Response.redirect(new URL("/login", request.url));
    }

    // return Response.json({ error: "you are not allowed here!" });
    // return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  // matcher:["/", "/profile", "/create-account", "/login", "/user/:path*"]
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}