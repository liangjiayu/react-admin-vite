---
name: crud-module-generator
description: 快速生成 CRUD 模块（包含列表页、弹窗表单、常量定义、API 服务、路由和菜单配置）。当用户想要新增一个管理页面、创建增删改查模块、添加新的数据管理功能时使用此 skill。即使用户只是说"帮我加一个 XX 管理页面"或"新建一个 XX 模块"，也应该触发此 skill。
---

# CRUD 模块生成器

根据用户提供的自然语言描述，生成完整的 CRUD 模块代码。生成的代码遵循项目现有的 `crud-table` 组件模式。

## 信息收集

在生成代码前，先从用户的描述中提取以下信息。如果用户没有提供某些信息，主动询问：

1. **模块名称**（中文，如"订单管理"）
2. **模块路径**（kebab-case，如 `order-manage`）
3. **数据字段列表**，每个字段需要：
   - 字段名（英文 camelCase，如 `orderName`）
   - 中文标签（如"订单名称"）
   - 字段类型：`text` | `select` | `date` | `dateTime` | `textarea` | `number`
   - 是否必填（默认否）
   - 是否作为搜索条件（默认否）
   - 如果是 `select` 类型，需要提供选项列表（key-label 对）
4. **API 路径前缀**（如 `/api/orders`）
5. **实体名称**（英文 PascalCase，如 `Order`，用于类型和服务命名）

## 生成文件清单

假设模块路径为 `{modulePath}`，实体名称为 `{Entity}`：

```
app/routes/{modulePath}/
├── index.tsx                          # 路由入口，导出页面组件和 handle
├── components/
│   └── {entity}-config-modal.tsx      # 新建/编辑弹窗
└── constants.ts                       # 【可选】仅当存在 select 类型字段时才生成
```

**重要：`constants.ts` 不是必须的。** 如果模块的字段中没有任何 select 类型（即没有枚举/常量需求），则不要生成 `constants.ts`，也不要在其他文件中导入它。保持模块文件精简。

同时需要修改的文件：
- `app/routes.ts` — 添加路由
- `config/side-menu-config.tsx` — 添加菜单项

## 代码模板

### 1. 路由入口 `app/routes/{modulePath}/index.tsx`

遵循以下模式：

```tsx
import { PlusOutlined } from '@ant-design/icons';
import {
  type ActionType,
  type ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { App as AntdApp, Button, Space } from 'antd';
import { useRef } from 'react';
import { ModalActionType } from '@/constants';
// 仅当有 select 类型字段时，才从 constants 导入对应的 MAP，否则不要导入也不要创建 constants.ts
// import { XXX_MAP } from './constants';
// 导入弹窗 hook
// import { use{Entity}ConfigModal } from './components/{entity}-config-modal';

const {Entity}Page = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const configModal = use{Entity}ConfigModal({
    handleOnFinish() {
      actionRef.current?.reload();
    },
  });

  const handleDelete = (record: any) => {
    modal.confirm({
      title: '确认删除？',
      content: `${record.name}`,  // 用主要标识字段
      onOk: async () => {
        // await API.delete({ id: record.id });
        message.success('提示：删除成功');
        actionRef.current?.reload();
      },
    });
  };

  const columns: ProColumns<any>[] = [
    // 根据字段列表生成列配置
    // 普通文本: { title: '标签', dataIndex: 'field' }
    // 枚举: { title: '标签', dataIndex: 'field', valueEnum: XXX_MAP }
    // 日期: { title: '标签', dataIndex: 'field', valueType: 'dateTime', search: false }
    // 不搜索的字段加 search: false
    // 操作列固定右侧
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space>
          <a onClick={() => configModal.setModalParams({
            open: true,
            modalActionType: ModalActionType.EDIT,
            title: `编辑 - ${record.name}`,
            initialValues: record,
          })}>编辑</a>
          <a className="text-red-500!" onClick={() => handleDelete(record)}>删除</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        cardBordered
        request={async (params) => {
          // 调用列表 API，传入分页和搜索参数
          return { data: [], total: 0 };
        }}
        search={{ labelWidth: 120, defaultCollapsed: false }}
        toolBarRender={() => [
          <Button
            key="CREATE"
            onClick={() => configModal.setModalParams({
              open: true,
              modalActionType: ModalActionType.CREATE,
              title: '新建{模块中文名}',
            })}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建{模块中文名}
          </Button>,
        ]}
      />
      {configModal.element}
    </>
  );
};

export default {Entity}Page;

export const handle = {
  name: '{模块中文名}',
};
```

### 2. 弹窗组件 `app/routes/{modulePath}/components/{entity}-config-modal.tsx`

遵循 `useXxxConfigModal` hook 模式：

```tsx
import {
  ModalForm,
  ProFormText,
  // 根据字段类型导入: ProFormSelect, ProFormDatePicker, ProFormTextArea 等
} from '@ant-design/pro-components';
import { App as AntdApp } from 'antd';
import type React from 'react';
import { useState } from 'react';
import { ModalActionType } from '@/constants';
// 如果有 select，导入 OPTIONS
// import { XXX_OPTIONS } from '../constants';

export type {Entity}ConfigModalProps = {
  width?: number | string;
  title?: string;
  open: boolean;
  initialValues?: any;  // 替换为具体类型
  modalActionType: ModalActionType;
  onClose: () => void;
  onFinish?: () => void;
};

const {Entity}ConfigModal: React.FC<{Entity}ConfigModalProps> = ({
  width = 600,
  title,
  open = false,
  initialValues,
  modalActionType,
  onClose,
  onFinish,
}) => {
  const { message } = AntdApp.useApp();
  const isEdit = modalActionType === ModalActionType.EDIT;

  const onFinishByForm = async (values: any) => {
    try {
      if (isEdit) {
        // await API.update({ id: initialValues?.id }, values);
      } else {
        // await API.create(values);
      }
    } catch {
      return false;
    }
    message.success(isEdit ? '提示：更新成功' : '提示：创建成功');
    onFinish?.();
    return true;
  };

  return (
    <ModalForm
      title={title}
      width={width}
      open={open}
      modalProps={{ destroyOnHidden: true, onCancel: onClose }}
      initialValues={initialValues}
      onFinish={onFinishByForm}
    >
      {/* 根据字段列表生成表单项 */}
      {/* text -> ProFormText */}
      {/* select -> ProFormSelect with options={XXX_OPTIONS} */}
      {/* date/dateTime -> ProFormDatePicker */}
      {/* textarea -> ProFormTextArea */}
      {/* number -> ProFormDigit */}
      {/* 必填字段加 rules={[{ required: true }]} */}
    </ModalForm>
  );
};

export default {Entity}ConfigModal;

export function use{Entity}ConfigModal(_params?: {
  handleOnClose?: () => void;
  handleOnFinish?: () => void;
}) {
  const [modalParams, setModalParams] = useState<
    Omit<{Entity}ConfigModalProps, 'onClose' | 'onFinish'>
  >({
    open: false,
    modalActionType: ModalActionType.CREATE,
  });

  const element = (
    <{Entity}ConfigModal
      {...modalParams}
      onClose={() => {
        setModalParams({ ...modalParams, open: false });
        _params?.handleOnClose?.();
      }}
      onFinish={() => {
        setModalParams({ ...modalParams, open: false });
        _params?.handleOnFinish?.();
      }}
    />
  );

  return { element, setModalParams };
}
```

### 3. 常量文件 `app/routes/{modulePath}/constants.ts`（可选）

**仅在有 `select` 类型字段时才生成此文件**，如果所有字段都是 text/date/textarea/number 等非枚举类型，则跳过此文件：

```ts
// 每个 select 字段定义 MAP 和 OPTIONS
export const XXX_MAP = {
  key1: { text: '标签1', status: 'Default' },
  key2: { text: '标签2', status: 'Processing' },
};

type MapItem = { text: string; [key: string]: any };

export function mapToOptions<T extends Record<string, MapItem>>(map: T) {
  return Object.entries(map).map(([value, item]) => ({
    label: item.text,
    value,
  }));
}

export const XXX_OPTIONS = mapToOptions(XXX_MAP);
```

`mapToOptions` 工具函数在每个 constants.ts 中自行定义，保持模块独立性。

### 4. 路由注册

在 `app/routes.ts` 的 `basic-layout` 子路由中添加：

```ts
route('{modulePath}', 'routes/{modulePath}/index.tsx'),
```

### 5. 菜单配置

在 `config/side-menu-config.tsx` 中添加菜单项，从 `lucide-react` 选择合适的图标：

```tsx
{
  path: '/{modulePath}',
  name: '{模块中文名}',
  icon: <SomeIcon />,
},
```

## 代码规范

- 文件和文件夹使用 **kebab-case** 命名
- 使用单引号、空格缩进
- 路径别名：`@/` 指向 `app/`，`@config/` 指向 `config/`
- 使用 `cn()` 工具函数合并 Tailwind 类名（如需要）
- Tailwind 的 `!important` 写法为 `text-red-500!`（后缀感叹号）
- API 调用的注释部分需要用户后续根据实际后端接口补充，生成时先用注释占位

## 生成流程

1. 从用户描述中提取信息，缺失的主动询问
2. 按文件清单依次生成所有文件
3. 修改 `app/routes.ts` 添加路由
4. 修改 `config/side-menu-config.tsx` 添加菜单
5. 告知用户 API 调用部分需要根据实际接口补充
