import type {
    LoginData,
    RegisterData,
    LoginResponse,
  } from "./type";

const baseURL = "https://fakestoreapi.com";

export async function loginUser(data: LoginData): Promise<LoginResponse> {
  const res = await fetch(`${baseURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Login failed - Invalid email or password");
  return res.json();
}

export async function registerUser(data: RegisterData): Promise<LoginResponse> {
  
  const res = await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}   
    