// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 创建文章数据 POST /api/sysArticle/create */
export async function createSysArticle(
  body: FastAPI.SysArticleSaveRequest,
  options?: { [key: string]: any }
) {
  return request<number>("/api/sysArticle/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文章数据 POST /api/sysArticle/delete */
export async function deleteSysArticle(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.deleteSysArticleParams,
  options?: { [key: string]: any }
) {
  return request<boolean>("/api/sysArticle/delete", {
    method: "POST",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文章列表 GET /api/sysArticle/pageList */
export async function getSysArticleByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.getSysArticleByPageParams,
  options?: { [key: string]: any }
) {
  return request<FastAPI.IPageSysArticle>("/api/sysArticle/pageList", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新文章数据 POST /api/sysArticle/update */
export async function updateSysArticle(
  body: FastAPI.SysArticleSaveRequest,
  options?: { [key: string]: any }
) {
  return request<boolean>("/api/sysArticle/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
