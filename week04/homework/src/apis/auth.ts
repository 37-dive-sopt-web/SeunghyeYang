import { api } from "./client";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginData {
  userId: number;
  name: string;
}

interface ApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

export async function login(req: LoginRequest) {
  const res = await api
    .post("auth/login", { json: req })
    .json<ApiResponse<LoginData>>();
  return res.data;
}
