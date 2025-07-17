import { Card } from 'antd';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const TodoList = () => {
  return (
    <Card title="todos - zustand版" style={{ width: 620 }}>
      <Header />
      <Main />
      <Footer />
    </Card>
  );
};

export default TodoList;
