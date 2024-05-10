import db from "@/lib/db";

export async function getAccessToken(code: string) {
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();
  
  const accessTokenUrl = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
  const accessTokenResponse = await fetch(accessTokenUrl, {
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  });
  const { error, access_token } = await accessTokenResponse.json();
  // const accessToken = accessTokenData.access_token;
  if(error) {
    return new Response(null, {
      status: 400,
    })
  }

  return access_token;
}

export async function getGithubProfile(accessToken: string) {
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    cache: "no-cache"
  });
  const { id, avatar_url, login } = await userProfileResponse.json();
  return { id, avatar_url, login };
}

export async function getGithubEmail(accessToken: string) {
  const userProfileResponse = await fetch("https://api.github.com/user/emails", {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    cache: "no-cache"
  });
  const response = await userProfileResponse.json();
  if(response) {
    return response[0].email;
  }
}

export async function checkExistUsername(username: string) {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user);
}