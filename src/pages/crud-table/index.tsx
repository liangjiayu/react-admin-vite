import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import { Button, Space } from 'antd';
import ApiServices from '@/services/ant-design-pro';
import { useAppConfigModal } from './components/AppConfigModal';
import { PlusOutlined } from '@ant-design/icons';
import { ModalActionType } from '@/constants';
import { App as AntdApp } from 'antd';

const CrudTable = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const appConfigModal = useAppConfigModal({
    handleOnFinish() {
      actionRef.current?.reload();
    },
  });

  const handleDelete = (record: OpenAPI.RuleListItem) => {
    modal.confirm({
      title: '确认删除该应用？',
      content: `${record.name}`,
      onOk: async () => {
        await ApiServices.rule.removeRule({
          data: { key: record?.key?.toString() },
        });
        message.success('提示：删除成功');
        actionRef.current?.reload();
      },
    });
  };

  const columns: ProColumns<OpenAPI.RuleListItem>[] = [
    {
      title: '规则名称',
      dataIndex: 'name',
      render: (text) => {
        return <a>{text}</a>;
      },
    },
    {
      title: '描述',
      dataIndex: 'desc',
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      hideInSearch: true,
      renderText: (val: string) => `${val}${'万'}`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '运行中',
          status: 'Processing',
        },
        2: {
          text: '已上线',
          status: 'Success',
        },
        3: {
          text: '异常',
          status: 'Error',
        },
      },
    },
    {
      title: '使用进度',
      dataIndex: 'progress',
      valueType: 'percent',
      hideInSearch: true,
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (_, record) => {
        return (
          <Space>
            <a
              onClick={() => {
                appConfigModal.setModalParams({
                  open: true,
                  modalActionType: ModalActionType.EDIT,
                  title: `编辑应用 - ${record.name}`,
                  initialValues: record,
                });
              }}
            >
              编辑
            </a>
            <a
              className="!text-red-500"
              onClick={() => {
                handleDelete(record);
              }}
            >
              删除
            </a>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <ProTable<OpenAPI.RuleListItem, OpenAPI.PageParams>
        columns={columns}
        actionRef={actionRef}
        rowKey="key"
        request={async (params) => {
          const res = await ApiServices.rule.rule({
            ...params,
            current: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: res?.data || [],
            total: res?.total || 0,
          };
        }}
        search={{
          labelWidth: 120,
          defaultCollapsed: false,
        }}
        toolBarRender={() => [
          <Button
            key="CREATE"
            onClick={() => {
              appConfigModal.setModalParams({
                open: true,
                modalActionType: ModalActionType.CREATE,
                title: '新建应用',
              });
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建应用
          </Button>,
        ]}
      />

      {appConfigModal.element}
    </>
  );
};

export default CrudTable;
