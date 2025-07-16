import { ClearOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { useTodoContext } from '../context';
import { ADD_ITEM, REMOVE_ALL_ITEMS } from '../types';
import { useState } from 'react';

const Header = () => {
  const { dispatch } = useTodoContext();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="mb-5">
      <Input
        placeholder="请输入代办事项"
        addonBefore={
          <Tooltip title="清空事项">
            <ClearOutlined
              className="cursor-pointer"
              onClick={() => {
                dispatch({ type: REMOVE_ALL_ITEMS });
              }}
            />
          </Tooltip>
        }
        size="large"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setInputValue('');
            dispatch({ type: ADD_ITEM, payload: { title: e.currentTarget.value } });
          }
        }}
      />
    </div>
  );
};

export default Header;
