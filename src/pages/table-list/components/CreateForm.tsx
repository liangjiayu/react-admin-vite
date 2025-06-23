import { addRule } from "@/services/ant-design-pro/rule";
import { PlusOutlined } from "@ant-design/icons";
import {
  type ActionType,
  ModalForm,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { useRequest } from "ahooks";
import { Button, message } from "antd";
import type { FC } from "react";

interface CreateFormProps {
  reload?: ActionType["reload"];
}
const CreateForm: FC<CreateFormProps> = (props) => {
  const { reload } = props;
  const [messageApi, contextHolder] = message.useMessage();
  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const { run, loading } = useRequest(addRule, {
    manual: true,
    onSuccess: () => {
      messageApi.success("Added successfully");
      reload?.();
    },
    onError: () => {
      messageApi.error("Adding failed, please try again!");
    },
  });
  return (
    <>
      {contextHolder}
      <ModalForm
        title={"新建规则"}
        trigger={
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
        }
        width="400px"
        modalProps={{
          okButtonProps: {
            loading,
          },
        }}
        onFinish={async (value) => {
          await run({
            data: value as API.RuleListItem,
          });
          return true;
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: "规则名称为必填项",
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
    </>
  );
};
export default CreateForm;
