declare namespace FastAPI {
  type CommonResultBoolean = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: boolean;
  };

  type CommonResultCurrentUserDTO = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: CurrentUserDTO;
  };

  type CommonResultInteger = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: number;
  };

  type CommonResultIPageSysArticle = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: IPageSysArticle;
  };

  type CommonResultIPageSysUsers = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: IPageSysUsers;
  };

  type CommonResultString = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: string;
  };

  type CommonResultSysUsers = {
    /** 状态码，成功为200，其他情况为异常 */
    code?: number;
    /** 异常信息 */
    message?: string;
    /** 结果数据主体 */
    data?: SysUsers;
  };

  type Contact = {
    /** 联系人姓名 */
    name: string;
    /** 联系人手机号码 */
    phone?: string;
    primary?: boolean;
  };

  type CurrentUserDTO = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    tags?: TagDTO[];
    address?: string;
    phone?: string;
  };

  type deletedSysUserParams = {
    /** 用户id */
    id: number;
  };

  type deleteSysArticleParams = {
    id: number;
  };

  type getSysArticleByPageParams = {
    /** 文章标题 */
    title?: string;
    /** 页码，默认为1 */
    current?: number;
    /** 分页大小，默认为10 */
    pageSize?: number;
  };

  type getSysUserByPageParams = {
    /** 支持id查询，支持数组 */
    ids?: number[];
    /** 用户名查询 */
    username?: string;
    /** 性别 */
    gender?: number;
    /** 元信息查询，支持模糊查询 */
    metadata?: string;
    /** 开始时间，格式为yyyy-MM-dd HH:mm:ss */
    startTime?: string;
    /** 结束时间，格式为yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 页码，默认为1 */
    current?: number;
    /** 分页大小，默认为10 */
    pageSize?: number;
  };

  type getUserDetailParams = {
    /** 用户id */
    id: number;
  };

  type IPageSysArticle = {
    size?: number;
    current?: number;
    total?: number;
    records?: SysArticle[];
    pages?: number;
  };

  type IPageSysUsers = {
    size?: number;
    current?: number;
    total?: number;
    records?: SysUsers[];
    pages?: number;
  };

  type SysArticle = {
    /** 文章ID */
    id?: number;
    /** 文章标题 */
    title?: string;
    /** 文章内容 */
    content?: string;
    /** 作者ID */
    authorId?: number;
    /** 分类ID */
    categoryId?: number;
    /** 文章状态 */
    status?: string;
    /** 阅读量 */
    viewCount?: number;
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 逻辑删除时间 */
    deletedAt?: string;
  };

  type SysArticleSaveRequest = {
    /** 文章ID */
    id?: number;
    /** 文章标题 */
    title?: string;
    /** 文章内容 */
    content?: string;
    /** 作者ID */
    authorId?: number;
    /** 分类ID */
    categoryId?: number;
    /** 文章状态 */
    status?: string;
    /** 阅读量 */
    viewCount?: number;
  };

  type SysUserCreateDto = {
    /** 用户名，唯一 */
    username: string;
    /** 用户密码 */
    password: string;
  };

  type SysUsers = {
    /** 用户id */
    id?: number;
    /** 用户名，唯一 */
    username?: string;
    /** 用户密码 */
    password?: string;
    /** 用户手机号 */
    phoneNumber?: string;
    /** 用户性别，枚举类型：男性(1)、女性(2)、其他(3) */
    gender?: number;
    /** 性别文本 */
    genderText?: string;
    /** 用户称号 */
    nickname?: string;
    /** 用户头像的URL */
    profilePictureUrl?: string;
    /** 用户简介 */
    profileDescription?: string;
    /** 用户元数据，存储额外的自定义信息 */
    metadata?: SysUsersMetaData;
    /** 创建时间 */
    createdAt?: string;
    /** 更新时间 */
    updatedAt?: string;
    /** 逻辑删除标识 */
    isDeleted?: number;
  };

  type SysUsersMetaData = {
    /** 博客地址 */
    blogUrl?: string;
    /** Facebook地址 */
    facebookUrl?: string;
    /** 联系人信息 */
    contacts?: Contact[];
    /** 手机号码是否已验证 */
    phoneVerified?: boolean;
    /** 是否订阅通知 */
    subscribed?: boolean;
  };

  type SysUserUpdateDto = {
    /** 用户手机号 */
    phoneNumber?: string;
    /** 用户性别，枚举类型：男(1)、女(2)、其他(3) */
    gender?: number;
    /** 用户称呼 */
    nickname?: string;
    /** 用户头像的URL */
    profilePictureUrl?: string;
    /** 用户简介 */
    profileDescription?: string;
    /** 用户元数据，存储额外的自定义信息 */
    metadata?: SysUsersMetaData;
  };

  type TagDTO = {
    key?: string;
    label?: string;
  };

  type updateSysUserParams = {
    /** 用户id */
    id: number;
  };
}
