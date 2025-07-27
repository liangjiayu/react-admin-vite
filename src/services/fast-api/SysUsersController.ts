// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 用户详情 GET /api/sys_users/${param0} */
export async function getUserDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.getUserDetailParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<FastAPI.SysUsers>(`/api/sys_users/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 创建用户，返回用户id POST /api/sys_users/create */
export async function createSysUser(
  body: FastAPI.SysUserCreateDto,
  options?: { [key: string]: any }
) {
  return request<number>("/api/sys_users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 POST /api/sys_users/deleted/${param0} */
export async function deletedSysUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.deletedSysUserParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/sys_users/deleted/${param0}`, {
    method: "POST",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/sys_users/list */
export async function getSysUserByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.getSysUserByPageParams,
  options?: { [key: string]: any }
) {
  return request<FastAPI.IPageSysUsers>("/api/sys_users/list", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新用户 POST /api/sys_users/update/${param0} */
export async function updateSysUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.updateSysUserParams,
  body: FastAPI.SysUserUpdateDto,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<boolean>(`/api/sys_users/update/${param0}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
