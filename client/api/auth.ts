export async function loginUser(email: string, password: string) {
  const response = await fetch("http://10.0.2.2:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  return data;
}
