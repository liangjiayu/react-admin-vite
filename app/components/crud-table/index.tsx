import { PlusOutlined } from '@ant-design/icons';
import {
  type ActionType,
  type ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { App as AntdApp, Button, Space } from 'antd';
import { useRef } from 'react';
import { ModalActionType } from '@/constants';
import { FastApiServices } from '@/services';
import { useTaskConfigModal } from './components/task-config-modal';
import { PRIORITY_MAP, STATUS_MAP } from './constants';

const CrudTable = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const taskConfigModal = useTaskConfigModal({
    handleOnFinish() {
      actionRef.current?.reload();
    },
  });

  const handleDelete = (record: FastAPI.Task) => {
    modal.confirm({
      title: '确认删除该任务？',
      content: `${record.name}`,
      onOk: async () => {
        await FastApiServices.Task.deleteTask({
          id: record.id,
        });
        message.success('提示：删除成功');
        actionRef.current?.reload();
      },
    });
  };

  const columns: ProColumns<FastAPI.Task>[] = [
    {
      title: '任务名称',
      dataIndex: 'name',
    },
    {
      title: '任务状态',
      dataIndex: 'status',
      valueEnum: STATUS_MAP,
    },
    {
      title: '优先级',
      dataIndex: 'priority',
      search: false,
      valueEnum: PRIORITY_MAP,
    },
    {
      title: '负责人',
      dataIndex: 'assignee',
      search: false,
    },
    {
      title: '任务描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      search: false,
      width: 180,
    },
    {
      title: '截止时间',
      dataIndex: 'deadline',
      valueType: 'dateTime',
      search: false,
      width: 180,
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
                taskConfigModal.setModalParams({
                  open: true,
                  modalActionType: ModalActionType.EDIT,
                  title: `编辑任务 - ${record.name}`,
                  initialValues: record,
                });
              }}
            >
              编辑
            </a>
            <a
              className="text-red-500!"
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
      <ProTable<FastAPI.Task>
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        cardBordered
        request={async (params) => {
          const res = await FastApiServices.Task.getTasks({
            page: params.current,
            pageSize: params.pageSize,
            name: params?.name,
            status: params?.status,
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
              taskConfigModal.setModalParams({
                open: true,
                modalActionType: ModalActionType.CREATE,
                title: '新建任务',
              });
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建任务
          </Button>,
        ]}
      />

      {taskConfigModal.element}
    </>
  );
};

export default CrudTable;

export const handle = {
  name: 'CRUD表格',
};
