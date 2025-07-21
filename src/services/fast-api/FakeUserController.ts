// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 获取用户信息 GET /api/currentUser */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<FastAPI.CurrentUserDTO>("/api/currentUser", {
    method: "GET",
    ...(options || {}),
  });
}

/** 用户登录 POST /api/login/account */
export async function loginAccount(
  body: Record<string, any>,
  options?: { [key: string]: any }
) {
  return request<string>("/api/login/account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/login/captcha */
export async function loginCaptcha(options?: { [key: string]: any }) {
  return request<string>("/api/login/captcha", {
    method: "GET",
    ...(options || {}),
  });
}

/** 退出登录 POST /api/login/outLogin */
export async function outLoginAccount(options?: { [key: string]: any }) {
  return request<string>("/api/login/outLogin", {
    method: "POST",
    ...(options || {}),
  });
}
