// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 创建文章数据 POST /api/sysArticles/create */
export async function createArticle(
  body: FastAPI.ArticleSaveRequest,
  options?: { [key: string]: any }
) {
  return request<number>("/api/sysArticles/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除文章数据 POST /api/sysArticles/deleted */
export async function deletedArticle(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.deletedArticleParams,
  options?: { [key: string]: any }
) {
  return request<boolean>("/api/sysArticles/deleted", {
    method: "POST",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取文章列表 GET /api/sysArticles/pageList */
export async function getArticleByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.getArticleByPageParams,
  options?: { [key: string]: any }
) {
  return request<FastAPI.IPageSysArticles>("/api/sysArticles/pageList", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新文章数据 POST /api/sysArticles/update */
export async function updateArticle(
  body: FastAPI.ArticleSaveRequest,
  options?: { [key: string]: any }
) {
  return request<boolean>("/api/sysArticles/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
