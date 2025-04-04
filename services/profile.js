import { auth } from "../auth";

export async function nameService() {
  try {
    const session = await auth();

    if (!session || !session.token) {
      throw new Error("User is not authenticated");
    }

    const res = await fetch("http://96.9.81.187:8080/api/v1/user", {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data.payload;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null; // Return null or handle error appropriately
  }
}
