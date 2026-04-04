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
import { useCrudConfigModal } from './components/crud-config-modal';

/**
 * 业务页面的crud组件，需要根据实际情况，替换对应的函数
 *
 * Task: 服务端的实体
 * getTasks：分页查询接口
 * createTask：新建接口
 * updateTask：更新接口
 * deleteTask：删除接口
 */

const CrudTable = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const crudConfigModal = useCrudConfigModal({
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
          id: String(record.id),
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
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'date',
      search: false,
      width: 170,
    },
    {
      title: '截止时间',
      dataIndex: 'deadline',
      valueType: 'dateTime',
      search: false,
      width: 170,
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
                crudConfigModal.setModalParams({
                  open: true,
                  modalActionType: ModalActionType.EDIT,
                  title: `编辑 - ${record.name}`,
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
      <ProTable<FastAPI.Task>
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        cardBordered
        request={async (params) => {
          const res = await FastApiServices.Task.getTasks({
            page: String(params.current),
            pageSize: String(params.pageSize),
            name: params?.name,
          });

          return {
            data: res?.data || [],
            total: res?.total || 0,
          };
        }}
        search={{
          defaultCollapsed: false,
        }}
        toolBarRender={() => [
          <Button
            key="CREATE"
            onClick={() => {
              crudConfigModal.setModalParams({
                open: true,
                modalActionType: ModalActionType.CREATE,
                title: '新建',
              });
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建
          </Button>,
        ]}
      />

      {crudConfigModal.element}
    </>
  );
};

export default CrudTable;
