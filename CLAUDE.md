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

## Code Style

- **Biome** 负责格式化和 lint（非 ESLint/Prettier），配置在 `biome.json`
- 单引号、空格缩进
- 提交时 Husky + lint-staged 自动检查
- 路径别名：`@/` → `app/`，`@config/` → `config/`

### 命名规范

- 文件夹和文件统一使用 **kebab-case**（如 `global-store.ts`、`access-control/`）

### 注释规范

- 只写重要的、有意义的注释，避免显而易见的废话注释
- 辅助工具类函数建议都写注释说明其用途
