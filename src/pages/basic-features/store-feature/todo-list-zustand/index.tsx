import { Card } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { TodoProvider } from './context';

const TodoList = () => {
  return (
    <TodoProvider>
      <Card title="todos - zustand版" style={{ width: 620 }}>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodoProvider>
  );
};

export default TodoList;
