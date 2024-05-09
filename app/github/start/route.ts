import { redirect } from "next/dist/server/api-utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: "read:user",
    allow_signup: "true",
  }
  const formattedParams = new URLSearchParams(params).toString();
  const finalUrl = `${baseUrl}?${formattedParams}`;
  return Response.redirect(finalUrl);
}
