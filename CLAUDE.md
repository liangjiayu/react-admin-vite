# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 生产环境构建 (react-router build)
pnpm preview      # 预览生产构建
pnpm format       # Biome 格式化
pnpm check        # Biome 代码检查
pnpm check:fix    # Biome 代码检查并自动修复
pnpm openapi      # 从 Swagger 文档生成 API 服务代码
```

## Architecture

基于 React 19 + React Router v7 + Ant Design 6 + Zustand 的后台管理系统。

### 路由与布局

- 路由配置在 `app/routes.ts`，使用 React Router v7 显式配置（非文件约定）
- 两套布局：`basic-layout`（主后台）和 `blank-layout`（空白布局）
- 路由通过 `handle` 导出元信息：`name`（页面标题）、`access`（权限 key）
- `basic-layout` 的 `clientLoader` 负责初始化全局状态和权限

### 状态管理 (Zustand)

- `app/store/global-store.ts` — 用户信息、主题模式，themeMode 持久化到 localStorage
- `app/store/access-store.ts` — 权限状态（isAdmin、isUser 等），由 `initAccess()` 基于 currentUser 初始化

### API 层

- Axios 实例在 `app/utils/request/index.ts`，自动处理 401 跳转和错误提示
- API 服务由 `@umijs/openapi` 自动生成到 `app/services/fast-api/`，不要手动修改
- OpenAPI 配置在 `config/openapi.js`，数据源为 mock API

### 数据请求 (react-query)

- 工具与 Provider：`app/utils/query-client.ts`（已在 `root.tsx` 挂载）
- 查询用 `useQuery` 封装 hook，放模块目录（如 `app/routes/task-card/hooks.ts`）
- Query Key 导出前缀常量：`export const TASK_LIST_KEY = ['task', 'list'] as const`
- 提交（增删改）写普通 `async` 函数，末尾 `refreshQuery(TASK_LIST_KEY)` 刷新
- 需要乐观更新、跨组件复用同一变更逻辑时，才使用 `useMutation`

### 权限模型

- 路由级：`handle.access` 指定所需权限 key
- 组件级：`app/components/access-control/` 包裹受限内容
- 权限不足显示 403 页面

### 样式

- Tailwind CSS v4 + Ant Design 主题（`config/antd-theme.ts`）
- 使用 `cn()` 工具函数（clsx + tailwind-merge）合并类名，位于 `app/utils/`
- 侧边栏配置在 `config/sidebar-setting.ts`，菜单在 `config/side-menu-config.tsx`

### 组件模式

- 共享组件在 `app/components/`，页面在 `app/routes/`
- CRUD 页面基于 Pro Components 的 ProTable
- 使用 `/crud-module-generator` 可快速生成 CRUD 模块

### 新增路由

新增页面时需要同步修改：
1. `app/routes/` 下新建页面组件，通过 `handle` 导出 `name` 和 `access`
2. `app/routes.ts` 中添加路由配置
3. `config/side-menu-config.tsx` 中添加菜单项（图标使用 lucide-react）

## Code Style

- **Biome** 负责格式化和 lint（非 ESLint/Prettier），配置在 `biome.json`
- 单引号、空格缩进
- 提交时 Husky + lint-staged 自动检查
- 路径别名：`@/` → `app/`，`@config/` → `config/`

### 命名规范

- 文件夹和文件统一使用 **kebab-case**（如 `global-store.ts`、`access-control/`）
- React 组件函数使用 **PascalCase**，Props 类型统一命名为 `Props`
- 自定义 Hook 命名为 `use{Name}`，如 `useTitleUpdater`、`useTaskConfigModal`
- 常量枚举映射使用 **UPPER_SNAKE_CASE**，如 `STATUS_MAP`、`PRIORITY_MAP`

### 注释规范

- 只写重要的、有意义的注释，避免显而易见的废话注释
- 辅助工具类函数建议都写注释说明其用途

