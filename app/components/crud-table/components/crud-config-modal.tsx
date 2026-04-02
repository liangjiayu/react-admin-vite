import {
  ModalForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { App as AntdApp } from 'antd';
import React, { useState } from 'react';
import { ModalActionType } from '@/constants';
import { FastApiServices } from '@/services';

export type CrudConfigModalProps = {
  width?: number | string;
  title?: string;
  open: boolean;
  initialValues?: FastAPI.CrudModelVo;
  modalActionType: ModalActionType;
  onClose: () => void;
  onFinish?: () => void;
};

const CrudConfigModal: React.FC<CrudConfigModalProps> = ({
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

  const isCreate = modalActionType === ModalActionType.CREATE;

  const isView = modalActionType === ModalActionType.VIEW;

  const onFinishByForm = async (values: any) => {
    console.log('values', values);
    console.log('isCreate', isCreate);

    try {
      if (isEdit) {
        await FastApiServices.updateCrudFunction({
          ...values,
          id: initialValues?.id,
        });
      } else {
        await FastApiServices.createSysArticle({
          ...values,
        });
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
        label="文章标题"
        name="title"
        placeholder="请输入文章标题"
        rules={[{ required: true }]}
      />
      <ProFormTextArea
        label="文章内容"
        name="content"
        placeholder="请输入文章内容"
      />
      <ProFormSelect
        label="状态"
        name="status"
        placeholder="请选择状态"
        options={[
          { label: '上架', value: 1 },
          { label: '下架', value: 2 },
        ]}
        rules={[{ required: true }]}
      />
      <ProFormDigit
        label="浏览量"
        name="viewCount"
        placeholder="请输入浏览量"
      />
    </ModalForm>
  );
};

export default CrudConfigModal;

export function useCrudConfigModal(_params?: {
  /** 弹窗关闭回调 */
  handleOnClose?: () => void;
  /** 弹窗完成回调 */
  handleOnFinish?: () => void;
}) {
  /** 弹窗状态 */
  const [modalParams, setModalParams] = useState<
    Omit<CrudConfigModalProps, 'onClose' | 'onFinish'>
  >({
    open: false,
    modalActionType: ModalActionType.CREATE,
  });

  const element = (
    <>
      <CrudConfigModal
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
