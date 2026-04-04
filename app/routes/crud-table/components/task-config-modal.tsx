import {
  ModalForm,
  ProFormDatePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { App as AntdApp } from 'antd';
import type React from 'react';
import { useState } from 'react';
import { ModalActionType } from '@/constants';
import { FastApiServices } from '@/services';
import { PRIORITY_OPTIONS, STATUS_OPTIONS } from '../constants';

export type TaskConfigModalProps = {
  width?: number | string;
  title?: string;
  open: boolean;
  initialValues?: FastAPI.Task;
  modalActionType: ModalActionType;
  onClose: () => void;
  onFinish?: () => void;
};

const TaskConfigModal: React.FC<TaskConfigModalProps> = ({
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
        await FastApiServices.Task.updateTask(
          { id: initialValues?.id },
          values,
        );
      } else {
        await FastApiServices.Task.createTask(values);
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
      modalProps={{
        destroyOnHidden: true,
        onCancel: onClose,
      }}
      initialValues={initialValues}
      onFinish={onFinishByForm}
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

export default TaskConfigModal;

export function useTaskConfigModal(_params?: {
  /** 弹窗关闭回调 */
  handleOnClose?: () => void;
  /** 弹窗完成回调 */
  handleOnFinish?: () => void;
}) {
  const [modalParams, setModalParams] = useState<
    Omit<TaskConfigModalProps, 'onClose' | 'onFinish'>
  >({
    open: false,
    modalActionType: ModalActionType.CREATE,
  });

  const element = (
    <TaskConfigModal
      {...modalParams}
      onClose={() => {
        setModalParams({
          ...modalParams,
          open: false,
        });
        _params?.handleOnClose?.();
      }}
      onFinish={() => {
        setModalParams({
          ...modalParams,
          open: false,
        });
        _params?.handleOnFinish?.();
      }}
    />
  );

  return {
    element,
    setModalParams,
  };
}
