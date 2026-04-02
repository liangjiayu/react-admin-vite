// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 获取当前用户信息 GET /api/currentUser */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<FastAPI.CurrentUser>("/api/currentUser", {
    method: "GET",
    ...(options || {}),
  });
}
