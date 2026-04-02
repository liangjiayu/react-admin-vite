import { DeleteOutlined } from '@ant-design/icons';
import { Button, Checkbox, Empty, Input } from 'antd';
import { createStyles } from 'antd-style';
import { useMemo } from 'react';
import { useTodoContext } from '../context';
import { REMOVE_ITEM, TOGGLE_ITEM, UPDATE_ITEM } from '../types';

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

  const visibleTodos = useMemo(() => {
    const list = state.todos.filter((item) => {
      if (state.mode === 'ACTIVE') {
        return !item.completed;
      }
      if (state.mode === 'COMPLETED') {
        return item.completed;
      }
      return true;
    });
    return list;
  }, [state]);

  return (
    <div className="rounded-[8px] border border-gray-300">
      {visibleTodos?.map((item) => {
        return (
          <div
            className="flex items-center border-b border-b-gray-300 px-[15px] py-[10px] last:border-b-0"
            key={item.id}
          >
            <Checkbox
              className={styles['custom-checkbox']}
              checked={item?.completed}
              onChange={() => {
                dispatch({ type: TOGGLE_ITEM, payload: { id: item.id } });
              }}
            />
            <Input
              variant="borderless"
              size="large"
              defaultValue={item?.title}
              onBlur={(e) => {
                dispatch({
                  type: UPDATE_ITEM,
                  payload: { id: item.id, title: e.currentTarget.value },
                });
              }}
              style={{
                textDecoration: item?.completed ? 'line-through' : 'none',
              }}
              placeholder="待办事项为空"
            />
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => {
                dispatch({ type: REMOVE_ITEM, payload: { id: item.id } });
              }}
            />
          </div>
        );
      })}

      {visibleTodos?.length === 0 && (
        <Empty
          description="暂无数据"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          className="py-[40px]"
        />
      )}
    </div>
  );
};

export default Main;
