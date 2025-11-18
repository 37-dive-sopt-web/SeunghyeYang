import { api } from "./client";

export interface SignUpRequest {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}

interface ApiResponse<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

export async function signup(req: SignUpRequest) {
  const res = await api.post("users", { json: req }).json<ApiResponse<null>>();

  if (!res.success) {
    throw new Error(res.message || "회원가입에 실패했습니다.");
  }
}
