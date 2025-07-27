import { Card } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { TodoProvider } from './context';

const TodoList = () => {
  return (
    <TodoProvider>
      <Card
        title="todos - zustand版"
        style={{ width: 620 }}
        extra={
          <a
            href="https://github.com/liangjiayu/react-admin-vite/blob/dev/src/pages/basic-features/store-feature/todo-list-zustand/store.ts"
            target="_blank"
            rel="noopener"
          >
            查看源码
          </a>
        }
      >
        <div className="mb-4">
          主要使用 context+zustand
          实现组件上下文的通讯，适用于中大型组件交互，性能好，但是需要灵活使用
          zustand 的工厂模式。
        </div>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodoProvider>
  );
};

export default TodoList;
