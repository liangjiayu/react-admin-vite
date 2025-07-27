import { Tabs } from 'antd';
import TodoList from './todo-list';
import TodoListReduce from './todo-list-reduce';
import TodoListZustand from './todo-list-zustand';

const StoreFeature = () => {
  return (
    <Tabs
      items={[
        {
          label: 'react-context',
          key: 'react-context',
          children: <TodoList />,
        },
        {
          label: 'react-reduce',
          key: 'react-reduce',
          children: <TodoListReduce />,
        },
        {
          label: 'zustand',
          key: 'zustand',
          children: <TodoListZustand />,
        },
      ]}
    ></Tabs>
  );
};

export default StoreFeature;
