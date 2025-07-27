import { Button, Radio } from 'antd';
import { useTodoContext } from '../context';
import { REMOVE_COMPLETED_ITEMS, SET_MODE } from '../types';
import { useMemo } from 'react';

const Footer = () => {
  const { state, dispatch } = useTodoContext();

  const activeTodos = useMemo(
    () => state.todos.filter((todo) => !todo.completed),
    [state],
  );

  return (
    <div className="mt-4 flex items-center justify-between">
      <span>还剩 {activeTodos.length} 件</span>
      <div>
        <Radio.Group
          value={state.mode}
          optionType="button"
          buttonStyle="solid"
          options={[
            { label: '全部', value: 'ALL' },
            { label: '未完成', value: 'ACTIVE' },
            { label: '已完成', value: 'COMPLETED' },
          ]}
          onChange={(e) => {
            dispatch({ type: SET_MODE, payload: { mode: e.target.value } });
          }}
        />
      </div>
      <Button
        size="small"
        onClick={() => {
          dispatch({ type: REMOVE_COMPLETED_ITEMS });
        }}
      >
        清除已完成
      </Button>
    </div>
  );
};

export default Footer;
