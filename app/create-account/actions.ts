"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWROD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({password, confirm_password}: {password: string, confirm_password: string}) => password === confirm_password;

const formSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string",
    required_error: "Where is my username??"
  })
  .min(3, "Way too short!!!")
  .toLowerCase()
  .trim()
  .transform((data) => data.replace(/\s/g, "-")) // Replace spaces with dashes
  .refine(checkUsername, "No potatoes allowed!"),
  email: z.string().email().toLowerCase(),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWROD_REGEX_ERROR),
  confirm_password: z.string().min(10)
}).refine(checkPasswords, {
  message: "Boat paaswords should be ths same!",
  path: ["confirm_password"]
});

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = formSchema.safeParse(data);
  if(!result.success) {
    return result.error.flatten();
  }
  else {
    console.log(result.data);
  }
};