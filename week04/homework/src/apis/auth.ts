import { api } from "./client";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  name: string;
}

export async function login(req: LoginRequest) {
  const res = await api.post("auth/login", { json: req }).json<LoginResponse>();
  return res;
}
