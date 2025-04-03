"use server";

import { redirect } from "next/navigation";
import { registerService } from "../services/register-service";

export const registerAction = async (_, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await registerService({
      username,
      email,
      password,
    });

    // Check the response status from the JSON data
    // console.log("Response data:", data);
    // if (data.status === "CREATED") {
    //   console.log("Registration successful:");
    //   redirect("/login"); // Server-side redirect
    // } else {
    //   console.error("Registration failed:", data.message || "Unknown error");
    // }

    return data;
  } catch (error) {
    console.error("Error in registerAction:", error);
    return { error: "Registration failed!" };
  }
};
