// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 获取任务列表 GET /api/tasks */
export async function getTasks(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.getTasksParams,
  options?: { [key: string]: any }
) {
  return request<FastAPI.TaskListResponse>("/api/tasks", {
    method: "GET",
    params: {
      // page has a default value: 1
      page: "1",
      // pageSize has a default value: 10
      pageSize: "10",

      ...params,
    },
    ...(options || {}),
  });
}

/** 创建任务 POST /api/tasks */
export async function createTask(
  body: FastAPI.CreateTask,
  options?: { [key: string]: any }
) {
  return request<FastAPI.SuccessResponse>("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑任务 PUT /api/tasks/${param0} */
export async function updateTask(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.updateTaskParams,
  body: FastAPI.UpdateTask,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<FastAPI.SuccessResponse>(`/api/tasks/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除任务 DELETE /api/tasks/${param0} */
export async function deleteTask(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: FastAPI.deleteTaskParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<FastAPI.SuccessResponse>(`/api/tasks/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || {}),
  });
}
