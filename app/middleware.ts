// create middleware

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticate = false;
  if (!isAuthenticate) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin",
};
