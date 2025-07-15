import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, Input } from 'antd';
import { createStyles } from 'antd-style';
import { useTodoContext } from '../context';

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

const Main = () => {
  const { styles } = useStyle();
  const { state, dispatch } = useTodoContext();

  console.log('state', state);
  console.log('dispatch', dispatch);

  return (
    <div className="rounded-[8px] border border-gray-300">
      {/* {state.todos?.map((item) => {
      return (
        <div
          className="flex items-center border-b border-b-gray-300 px-[15px] py-[10px] last:border-b-0"
          key={item.id}
        >
          <Checkbox className={styles['custom-checkbox']} />
          <Input variant="borderless" size="large" defaultValue={item?.title} />
          <Button type="text" icon={<DeleteOutlined />} />
        </div>
      );
    })} */}

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
  );
};

export default Main;
