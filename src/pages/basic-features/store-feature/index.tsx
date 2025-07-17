import TodoList from './todo-list';
import TodoListReduce from './todo-list-reduce';
import TodoListZustand from './todo-list-zustand';

const StoreFeature = () => {
  return (
    <div className="flex flex-col gap-4">
      <TodoList />
      <TodoListReduce />
      <TodoListZustand />
    </div>
  );
};

export default StoreFeature;
