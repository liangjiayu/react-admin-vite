import { Card } from 'antd';
import { useReducer } from 'react';
import { initialState, todoReducer } from './context';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { TodoContext } from './context';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <Card title="todos" style={{ width: 620 }}>
        <Header />
        <Main />
        <Footer />
      </Card>
    </TodoContext.Provider>
  );
};

export default TodoList;
