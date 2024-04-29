"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone, {
  message: "Invalid phone number",
});

const tokenSchema = z.coerce.number().min(100000).max(999999);

export const smsLogin = async (prevState: any, formData: FormData) => {
  
};