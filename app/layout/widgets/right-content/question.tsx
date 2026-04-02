import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Question = () => {
  return (
    <Button
      type="text"
      icon={<QuestionCircleOutlined />}
      href="https://admin-docs.liangjiayu.cn/"
      target="_blank"
    />
  );
};

export default Question;
