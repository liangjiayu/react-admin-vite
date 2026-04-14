import {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { App as AntdApp } from 'antd';
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
} from '@/components/crud-table/constants';
import { FastApiServices } from '@/services';
import { refreshQuery } from '@/utils/query-client';
import { TASK_LIST_KEY } from '../hooks';

type Props = {
  open: boolean;
  onClose: () => void;
};

const TaskCreateModal = ({ open, onClose }: Props) => {
  const { message } = AntdApp.useApp();

  return (
    <ModalForm<FastAPI.CreateTask>
      title="新建任务"
      width={600}
      open={open}
      modalProps={{ destroyOnHidden: true, onCancel: onClose }}
      onFinish={async (values) => {
        try {
          await FastApiServices.Task.createTask(values);
        } catch {
          return false;
        }
        message.success('创建成功');
        refreshQuery(TASK_LIST_KEY);
        onClose();
        return true;
      }}
    >
      <ProFormText
        label="任务名称"
        name="name"
        placeholder="请输入任务名称"
        rules={[{ required: true }]}
      />
      <ProFormSelect
        label="状态"
        name="status"
        placeholder="请选择状态"
        options={STATUS_OPTIONS}
        rules={[{ required: true }]}
      />
      <ProFormSelect
        label="优先级"
        name="priority"
        placeholder="请选择优先级"
        options={PRIORITY_OPTIONS}
        rules={[{ required: true }]}
      />
      <ProFormText
        label="负责人"
        name="assignee"
        placeholder="请输入负责人"
        rules={[{ required: true }]}
      />
      <ProFormTextArea
        label="任务描述"
        name="description"
        placeholder="请输入任务描述"
      />
      <ProFormDatePicker
        label="截止时间"
        name="deadline"
        placeholder="请选择截止时间"
      />
    </ModalForm>
  );
};

export default TaskCreateModal;
