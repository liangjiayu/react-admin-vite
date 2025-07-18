// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 登录接口 POST /api/login/account */
export async function login(body: OpenAPI.LoginParams, options?: { [key: string]: any }) {
  return request<OpenAPI.LoginResult>('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: OpenAPI.getFakeCaptchaParams,
  options?: { [key: string]: any },
) {
  return request<OpenAPI.FakeCaptcha>('/api/login/captcha', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}
