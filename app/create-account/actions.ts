"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWROD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({password, confirm_password}: {password: string, confirm_password: string}) => password === confirm_password;
const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
}
const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
}


const formSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string",
    required_error: "Where is my username??"
  })
  .min(3, "Way too short!!!")
  .toLowerCase()
  .trim()
  .transform((data) => data.replace(/\s/g, "-")) // Replace spaces with dashes
  .refine(checkUsername, "No potatoes allowed!")
  .refine(checkUniqueUsername, "This username is already taken!"),
  email: z.string().email().toLowerCase()
  .refine(checkUniqueEmail, "There is an account already registered with this email!"),
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

  const result = await formSchema.safeParseAsync(data);
  if(!result.success) {
    return result.error.flatten();
  }
  else {
    // hash pasword
    // save the user to db
    // log the user in
    // redirect to home

  }
};