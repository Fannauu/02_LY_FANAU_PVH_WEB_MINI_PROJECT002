
export async function loginService({ email, password }) {
  try {
    const res = fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
      console.log("reslogin",res)
    const data = (await res).json();
    console.log("data", data);

  return data;
  }catch (error) {
    console.error("Error during login:", error);
    return { error: "Something went wrong!" };
  }
    
}
