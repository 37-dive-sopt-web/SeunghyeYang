import { api } from "./client";

// 회원가입
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

// 개인정보 조회
export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
}

export async function getUser(id: number) {
  const res = await api.get(`users/${id}`).json<ApiResponse<User>>();

  return res.data;
}

// 개인정보 수정
export interface UpdateUserRequest {
  name: string;
  email: string;
  age: number;
}

export async function updateUser(id: number, req: UpdateUserRequest) {
  const res = await api
    .patch(`users/${id}`, { json: req })
    .json<ApiResponse<User>>();

  return res.data;
}
