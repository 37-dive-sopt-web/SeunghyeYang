import ky from "ky";

const API_BASE_URL = "http://15.164.129.239/api/v1";

export const api = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
