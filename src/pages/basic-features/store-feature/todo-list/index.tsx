import { Card } from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { TodosProvider } from './context';

const TodoList = () => {
  return (
    <TodosProvider>
      <Card
        title="todos - context版"
        style={{ width: 620 }}
        extra={
          <a
            href="https://github.com/liangjiayu/react-admin-vite/blob/dev/src/pages/basic-features/store-feature/todo-list/context.tsx"
            target="_blank"
            rel="noopener"
          >
            查看源码
          </a>
        }
      >
        <div className="mb-4">
          主要使用 context 实现组件上下文的通讯，适用于中小型应用的交互。
        </div>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodosProvider>
  );
};

export default TodoList;
