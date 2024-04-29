"use server";

import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  token: z.string({
    required_error: "Token is required",
  })
});

export const smsVerification = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    token: formData.get("token"),
  };

  const result = formSchema.safeParse(data);
  if(!result.success) {
    return result.error.flatten();
  }
  else {
    console.log(result.data);
  }
};