import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";
import db from "@/lib/db";
import userLogin from "@/lib/login";
import { checkExistUsername, getAccessToken, getGithubEmail, getGithubProfile } from "./actions";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if(!code) {
    notFound();
  }

  const access_token = await getAccessToken(code);
  const { id, avatar_url, login } = await getGithubProfile(access_token);
  const email = await getGithubEmail(access_token);
  
  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    }
  });
  if(user) {
    await userLogin(user.id);
    return redirect("/profile");
  }

  const existingUser = await checkExistUsername(login);

  const newUser = await db.user.create({
    data: {
      username: existingUser? `${login}-gh` : login,
      github_id: id + "",
      avatar: avatar_url,
      email
    },
    select: {
      id: true,
    }
  });

  await userLogin(newUser.id);
  return redirect("/profile");
}
