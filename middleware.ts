import { NextRequest } from "next/server";
import getSession from "./lib/session";

export async function middleware(request: NextRequest) {
  if(request.nextUrl.pathname === "/profile") {
    const session = await getSession();
    if(!session.id) {
      console.log(request.url);
      return Response.redirect(new URL("/login", request.url));
    }

    // return Response.json({ error: "you are not allowed here!" });
    // return Response.redirect(new URL("/", request.url));
  }
}