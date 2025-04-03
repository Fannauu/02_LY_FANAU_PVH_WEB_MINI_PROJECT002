"use server";
import { redirect } from "next/navigation";
import { signIn } from "../auth";

export const loginAction = async (_,formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  // console.log(email, password);


  console.log("form data", formData);
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  // redirect("/");
};
