declare namespace FastAPI {
  type CreateTask = {
    /** 任务名称 */
    name: string;
    /** 任务状态 */
    status: "todo" | "progress" | "done";
    /** 优先级 */
    priority: "low" | "medium" | "high";
    /** 负责人 */
    assignee: string;
    /** 任务描述 */
    description: string;
    /** 截止时间 */
    deadline: string;
  };

  type CurrentUser = {
    /** 用户姓名 */
    name: string;
    /** 头像 */
    avatar: string;
    /** 用户ID */
    userid: string;
    /** 邮箱 */
    email: string;
    /** 个性签名 */
    signature: string;
    /** 职位 */
    title: string;
    /** 所属部门 */
    group: string;
    /** 通知数量 */
    notifyCount: number;
    /** 未读消息数量 */
    unreadCount: number;
    /** 国家 */
    country: string;
    /** 地址 */
    address: string;
    /** 联系电话 */
    phone: string;
  };

  type deleteTaskParams = {
    id?: number;
  };

  type getTasksParams = {
    page?: number;
    pageSize?: number;
    name?: string;
    status?: "todo" | "progress" | "done";
  };

  type SuccessResponse = {
    /** 是否成功 */
    success: boolean;
    /** 提示信息 */
    message: string;
  };

  type Task = {
    /** 任务ID */
    id: number;
    /** 任务名称 */
    name: string;
    /** 任务状态 */
    status: "todo" | "progress" | "done";
    /** 优先级 */
    priority: "low" | "medium" | "high";
    /** 负责人 */
    assignee: string;
    /** 任务描述 */
    description: string;
    /** 创建时间 */
    createdAt: string;
    /** 截止时间 */
    deadline: string;
  };

  type TaskListResponse = {
    /** 数据列表 */
    data: Task[];
    /** 总数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
  };

  type UpdateTask = {
    /** 任务名称 */
    name?: string;
    /** 任务状态 */
    status?: "todo" | "progress" | "done";
    /** 优先级 */
    priority?: "low" | "medium" | "high";
    /** 负责人 */
    assignee?: string;
    /** 任务描述 */
    description?: string;
    /** 截止时间 */
    deadline?: string;
  };

  type updateTaskParams = {
    id?: number;
  };
}
