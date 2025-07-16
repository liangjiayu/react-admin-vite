import { Card } from 'antd';
import { TodosProvider } from './context';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const TodoList = () => {
  return (
    <TodosProvider>
      <Card title="todos - useReducer版" style={{ width: 620 }}>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodosProvider>
  );
};

export default TodoList;
