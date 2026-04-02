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
 * CrudModelVo: 服务端的实体
 * getCrudVoByPage：分页查询接口
 * createCrudFunction：新建接口
 * updateCrudFunction：更新接口
 * deleteCrudFunction：删除接口
 */

const CrudTable = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const crudConfigModal = useCrudConfigModal({
    handleOnFinish() {
      actionRef.current?.reload();
    },
  });

  const handleDelete = (record: FastAPI.CrudModelVo) => {
    modal.confirm({
      title: '确认删除该文章？',
      content: `${record.title}`,
      onOk: async () => {
        await FastApiServices.deleteCrudFunction({
          id: record.id as number,
        });
        message.success('提示：删除成功');
        actionRef.current?.reload();
      },
    });
  };

  const columns: ProColumns<FastAPI.CrudModelVo>[] = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      search: false,
      width: 170,
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
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
                  title: `编辑 - ${record.title}`,
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
      <ProTable<FastAPI.CrudModelVo>
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        cardBordered
        request={async (params) => {
          const res = await FastApiServices.getCrudByPage({
            current: params.current,
            pageSize: params.pageSize,
            title: params?.title,
          });

          return {
            data: res?.records || [],
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
