import { ClearOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Input, Checkbox, Radio, Button } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles({
  'custom-checkbox': {
    '& .ant-checkbox-inner': {
      width: 24,
      height: 24,
      borderRadius: '100%',
    },
    '& .ant-checkbox-inner::after': {
      insetInlineStart: '30%',
    },
  },
});

const TodoList = () => {
  const { styles } = useStyle();

  return (
    <Card title="todos" style={{ width: 620 }}>
      <div className="mb-5">
        <Input
          placeholder="请输入代办事项"
          addonBefore={<ClearOutlined className="cursor-pointer" />}
          size="large"
        ></Input>
      </div>
      <div className="rounded-[8px] border border-gray-300">
        <div className="flex items-center border-b border-b-gray-300 px-[15px] py-[10px] last:border-b-0">
          <Checkbox className={styles['custom-checkbox']} />
          <Input variant="borderless" size="large" />
          <Button type="text" icon={<DeleteOutlined />} />
        </div>
        <div className="flex items-center border-b border-b-gray-300 px-[15px] py-[10px] last:border-b-0">
          <Checkbox className={styles['custom-checkbox']} />
          <Input variant="borderless" size="large" />
          <Button type="text" icon={<DeleteOutlined />} />
        </div>
        <div className="flex items-center border-b border-b-gray-300 px-[15px] py-[10px] last:border-b-0">
          <Checkbox className={styles['custom-checkbox']} />
          <Input variant="borderless" size="large" />
          <Button type="text" icon={<DeleteOutlined />} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span>还剩 5 件</span>
        <div>
          <Radio.Group>
            <Radio.Button value="a">全部</Radio.Button>
            <Radio.Button value="b">未完成</Radio.Button>
            <Radio.Button value="c">已完成</Radio.Button>
          </Radio.Group>
        </div>
        <Button size="small">清除已完成</Button>
      </div>
    </Card>
  );
};

export default TodoList;
