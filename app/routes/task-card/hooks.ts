import { useQuery } from '@tanstack/react-query';
import { FastApiServices } from '@/services';

/** 任务列表缓存 */
export const TASK_LIST_KEY = ['task', 'list'] as const;

/** 任务列表查询 */
export function useTaskList(params: FastAPI.getTasksParams) {
  return useQuery({
    queryKey: [...TASK_LIST_KEY, params],
    queryFn: () => FastApiServices.Task.getTasks(params),
    placeholderData: (prev) => prev,
  });
}
