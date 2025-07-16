import TodoList from './todo-list';
import TodoListReduce from './todo-list-reduce';

const StoreFeature = () => {
  return (
    <div className="flex flex-col gap-4">
      <TodoList />
      <TodoListReduce />
    </div>
  );
};

export default StoreFeature;
