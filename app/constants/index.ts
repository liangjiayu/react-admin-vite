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

/** 主题模式 */
export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

/** 网站标题 */
export const SITE_APP_TITLE = 'Antd Admin Template';

/** 网站logo */
export const SITE_LOGO_URL = `${import.meta.env.BASE_URL}logo.svg`;
