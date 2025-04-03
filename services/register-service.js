export async function registerService({ username, email, password }) {
  try {
    const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error during registration:", error);
    return { error: "Something went wrong!" };
  }
}
