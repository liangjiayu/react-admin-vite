import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import { Button, Space } from 'antd';
import { useArticleConfigModal } from './components/ArticleConfigModal';
import { PlusOutlined } from '@ant-design/icons';
import { ModalActionType } from '@/constants';
import { App as AntdApp } from 'antd';
import { FastApiServices } from '@/services';

const CrudTable = () => {
  const actionRef = useRef<ActionType>(undefined);
  const { message, modal } = AntdApp.useApp();

  const articleConfigModal = useArticleConfigModal({
    handleOnFinish() {
      actionRef.current?.reload();
    },
  });

  const handleDelete = (record: FastAPI.SysArticles) => {
    modal.confirm({
      title: '确认删除该应用？',
      content: `${record.title}`,
      onOk: async () => {
        await FastApiServices.SysArticlesController.deletedArticle({
          id: record.id as number,
        });
        message.success('提示：删除成功');
        actionRef.current?.reload();
      },
    });
  };

  const columns: ProColumns<FastAPI.SysArticles>[] = [
    {
      title: '文章名称',
      dataIndex: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '更新时间',
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
                articleConfigModal.setModalParams({
                  open: true,
                  modalActionType: ModalActionType.EDIT,
                  title: `编辑应用 - ${record.title}`,
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
      <ProTable<FastAPI.SysArticles>
        columns={columns}
        actionRef={actionRef}
        rowKey="id"
        cardBordered
        request={async (params) => {
          const res = await FastApiServices.SysArticlesController.getArticleByPage({
            pageNum: params.current,
            pageSize: params.pageSize,
            title: params?.title,
          });

          return {
            data: res?.records || [],
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
              articleConfigModal.setModalParams({
                open: true,
                modalActionType: ModalActionType.CREATE,
                title: '新建文章',
              });
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            新建文章
          </Button>,
        ]}
      />

      {articleConfigModal.element}
    </>
  );
};

export default CrudTable;
