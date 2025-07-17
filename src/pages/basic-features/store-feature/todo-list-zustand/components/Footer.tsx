import { Button, Radio } from 'antd';
import { useTodoStore } from '../store';
import { useMemo } from 'react';

const Footer = () => {
  const { mode, todos, setMode, removeCompletedItems } = useTodoStore();

  const activeTodos = useMemo(() => todos.filter((todo) => !todo.completed), [mode, todos]);

  return (
    <div className="mt-4 flex items-center justify-between">
      <span>还剩 {activeTodos.length} 件</span>
      <div>
        <Radio.Group
          value={mode}
          optionType="button"
          buttonStyle="solid"
          options={[
            { label: '全部', value: 'ALL' },
            { label: '未完成', value: 'ACTIVE' },
            { label: '已完成', value: 'COMPLETED' },
          ]}
          onChange={(e) => {
            setMode(e.target.value);
          }}
        />
      </div>
      <Button
        size="small"
        onClick={() => {
          removeCompletedItems();
        }}
      >
        清除已完成
      </Button>
    </div>
  );
};

export default Footer;
