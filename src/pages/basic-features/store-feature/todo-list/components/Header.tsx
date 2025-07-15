import { ClearOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useTodoContext } from '../context';

const Header = () => {
  const { state, dispatch } = useTodoContext();

  return (
    <div className="mb-5">
      <Input
        placeholder="请输入代办事项"
        addonBefore={<ClearOutlined className="cursor-pointer" />}
        size="large"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // console.log(e.target.value);
            dispatch({ type: 'ADD_ITEM', payload: { title: e.target.value } });
          }
        }}
      />
    </div>
  );
};

export default Header;
