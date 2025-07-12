/** 初始化分页数据 */
export const INITIAL_PAGINATION = {
  current: 1,
  pageSize: 20,
};

/** 弹窗操作类型 */
export enum ModalActionType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  VIEW = 'VIEW',
  COPY = 'COPY',
}
