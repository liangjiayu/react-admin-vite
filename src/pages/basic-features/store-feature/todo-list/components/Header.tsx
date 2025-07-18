import { ClearOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
import { useTodoContext } from '../context';
import { useState } from 'react';

const Header = () => {
  const { addItem, removeAllItems } = useTodoContext();
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
                removeAllItems();
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
            addItem(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
};

export default Header;
