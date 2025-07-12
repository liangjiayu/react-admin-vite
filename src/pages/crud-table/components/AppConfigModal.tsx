import { DrawerActionType } from '@/constants';
import {
  ModalForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProFormDatePicker,
} from '@ant-design/pro-components';
import React, { useState } from 'react';
import ApiServices from '@/services/ant-design-pro';
import { App as AntdApp } from 'antd';

export type AppConfigModalProps = {
  width?: number | string;
  title?: string;
  open: boolean;
  initialValues?: any;
  drawerBizType: DrawerActionType;
  onClose: () => void;
  onFinish?: () => void;
};

const AppConfigModal: React.FC<AppConfigModalProps> = ({
  width = 600,
  title,
  open = false,
  initialValues,
  drawerBizType,
  onClose,
  onFinish,
}) => {
  const { message } = AntdApp.useApp();

  const isEdit = drawerBizType === DrawerActionType.EDIT;

  const isCreate = drawerBizType === DrawerActionType.CREATE;

  const isView = drawerBizType === DrawerActionType.VIEW;

  const onFinishByForm = async (values: any) => {
    console.log('values', values);

    try {
      if (isEdit) {
        await ApiServices.rule.updateRule({
          data: { key: initialValues?.key, ...values },
        });
      } else {
        await ApiServices.rule.addRule({ data: values });
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
      disabled={isView}
      modalProps={{
        destroyOnHidden: true,
        onCancel: onClose,
      }}
      initialValues={{
        ...initialValues,
      }}
      onFinish={onFinishByForm}
    >
      <ProFormText
        label="规则名称"
        name="name"
        placeholder="请输入规则名称"
        rules={[{ required: true }]}
      />
      <ProFormTextArea label="描述" name="desc" placeholder="请输入描述" />
      <ProFormSelect
        label="状态"
        name="status"
        placeholder="请选择状态"
        options={[
          { label: '关闭', value: '0' },
          { label: '运行中', value: '1' },
          { label: '已上线', value: '2' },
          { label: '异常', value: '3' },
        ]}
      />
      <ProFormDatePicker
        label="调度时间"
        name="updatedAt"
        placeholder="请选择调度时间"
        width="sm"
      />
    </ModalForm>
  );
};

export default AppConfigModal;

export function useAppConfigModal(_params?: {
  /** 弹窗关闭回调 */
  handleOnClose?: () => void;
  /** 弹窗完成回调 */
  handleOnFinish?: () => void;
}) {
  /** 弹窗状态 */
  const [modalParams, setModalParams] = useState<Omit<AppConfigModalProps, 'onClose' | 'onFinish'>>(
    {
      open: false,
      drawerBizType: DrawerActionType.CREATE,
    },
  );

  const element = (
    <>
      <AppConfigModal
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
    </>
  );

  return {
    element,
    setModalParams,
  };
}
