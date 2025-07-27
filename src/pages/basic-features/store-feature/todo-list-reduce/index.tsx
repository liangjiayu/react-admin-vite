import { Card } from 'antd';
import { TodosProvider } from './context';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const TodoList = () => {
  return (
    <TodosProvider>
      <Card
        title="todos - useReducer版"
        style={{ width: 620 }}
        extra={
          <a
            href="https://github.com/liangjiayu/react-admin-vite/blob/dev/src/pages/basic-features/store-feature/todo-list-reduce/context.tsx"
            target="_blank" rel="noopener"
          >
            查看源码
          </a>
        }
      >
        <div className="mb-4">
          主要使用 context+useReducer 实现组件上下文的通讯，不推荐使用，灵活性低并且心智成本高。
        </div>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodosProvider>
  );
};

export default TodoList;
