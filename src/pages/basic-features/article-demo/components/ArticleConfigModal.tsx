import { ModalActionType } from '@/constants';
import { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import React, { useState } from 'react';
import { App as AntdApp } from 'antd';
import { FastApiServices } from '@/services';

export type ArticleConfigModalProps = {
  width?: number | string;
  title?: string;
  open: boolean;
  initialValues?: FastAPI.SysArticle;
  modalActionType: ModalActionType;
  onClose: () => void;
  onFinish?: () => void;
};

const ArticleConfigModal: React.FC<ArticleConfigModalProps> = ({
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
        await FastApiServices.SysArticleController.updateSysArticle({
          ...values,
          id: initialValues?.id,
        });
      } else {
        await FastApiServices.SysArticleController.createSysArticle({ ...values });
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
      <ProFormTextArea label="文章内容" name="content" placeholder="请输入文章内容" />
    </ModalForm>
  );
};

export default ArticleConfigModal;

export function useArticleConfigModal(_params?: {
  /** 弹窗关闭回调 */
  handleOnClose?: () => void;
  /** 弹窗完成回调 */
  handleOnFinish?: () => void;
}) {
  /** 弹窗状态 */
  const [modalParams, setModalParams] = useState<
    Omit<ArticleConfigModalProps, 'onClose' | 'onFinish'>
  >({
    open: false,
    modalActionType: ModalActionType.CREATE,
  });

  const element = (
    <>
      <ArticleConfigModal
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
