import { PlusOutlined } from '@ant-design/icons';
import {
  App as AntdApp,
  Badge,
  Button,
  Card,
  Col,
  Empty,
  Input,
  Pagination,
  Row,
  Select,
  Space,
  Spin,
  Tag,
} from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
  PRIORITY_MAP,
  STATUS_MAP,
  STATUS_OPTIONS,
} from '@/components/crud-table/constants';
import { FastApiServices } from '@/services';
import { refreshQuery } from '@/utils/query-client';
import TaskCreateModal from './components/task-create-modal';
import { TASK_LIST_KEY, useTaskList } from './hooks';

const TaskCard = () => {
  const { message, modal } = AntdApp.useApp();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [name, setName] = useState('');
  const [status, setStatus] = useState<FastAPI.Task['status'] | undefined>();
  const [createOpen, setCreateOpen] = useState(false);

  const { data, isFetching } = useTaskList({ page, pageSize, name, status });

  const handleDelete = (record: FastAPI.Task) => {
    modal.confirm({
      title: '确认删除该任务？',
      content: record.name,
      onOk: async () => {
        await FastApiServices.Task.deleteTask({ id: record.id });
        message.success('删除成功');
        refreshQuery(TASK_LIST_KEY);
      },
    });
  };

  const tasks = data?.data ?? [];
  const total = data?.total ?? 0;

  return (
    <>
      <Card
        variant="borderless"
        title={
          <Space size="middle" wrap>
            <Input.Search
              placeholder="按名称搜索"
              allowClear
              style={{ width: 220 }}
              onSearch={(v) => {
                setName(v);
                setPage(1);
              }}
            />
            <Select
              placeholder="按状态筛选"
              allowClear
              style={{ width: 160 }}
              options={STATUS_OPTIONS}
              value={status}
              onChange={(v) => {
                setStatus(v);
                setPage(1);
              }}
            />
          </Space>
        }
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setCreateOpen(true)}
          >
            新建任务
          </Button>
        }
      >
        <Spin spinning={isFetching}>
          {tasks.length === 0 ? (
            <Empty className="py-16" />
          ) : (
            <Row gutter={[16, 16]}>
              {tasks.map((task) => {
                const statusConf = STATUS_MAP[task.status];
                const priorityConf = PRIORITY_MAP[task.priority];
                return (
                  <Col key={task.id} xs={24} sm={12} md={8} xl={6}>
                    <Card
                      title={task.name}
                      extra={
                        <Tag color={priorityConf.color}>
                          {priorityConf.text}
                        </Tag>
                      }
                      actions={[
                        <a
                          key="delete"
                          className="text-red-500!"
                          onClick={() => handleDelete(task)}
                        >
                          删除
                        </a>,
                      ]}
                    >
                      <div className="space-y-2 text-sm">
                        <div>
                          <Badge
                            status={statusConf.status as any}
                            text={statusConf.text}
                          />
                        </div>
                        <div className="text-gray-500">
                          负责人：{task.assignee}
                        </div>
                        <div className="line-clamp-2 h-10 text-gray-500">
                          {task.description || '-'}
                        </div>
                        <div className="text-gray-400 text-xs">
                          截止：
                          {task.deadline
                            ? dayjs(task.deadline).format('YYYY-MM-DD')
                            : '-'}
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}

          <div className="mt-6 flex justify-end">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={total}
              showSizeChanger
              pageSizeOptions={[12, 24, 48]}
              showTotal={(t) => `共 ${t} 条`}
              onChange={(p, ps) => {
                setPage(p);
                setPageSize(ps);
              }}
            />
          </div>
        </Spin>
      </Card>

      <TaskCreateModal open={createOpen} onClose={() => setCreateOpen(false)} />
    </>
  );
};

export default TaskCard;

export const handle = {
  name: '任务卡片',
};
