import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Question = () => {
  return (
    <Button
      type="text"
      icon={<QuestionCircleOutlined />}
      href="https://react-admin-vite-docs.vercel.app/"
      target="_blank"
    ></Button>
  );
};

export default Question;
