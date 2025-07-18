import TodoList from './todo-list';
import TodoListReduce from './todo-list-reduce';
import TodoListZustand from './todo-list-zustand';
import { Tabs } from 'antd';

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
