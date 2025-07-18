// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<OpenAPI.CurrentUser>('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<OpenAPI.NoticeIconItem[]>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
