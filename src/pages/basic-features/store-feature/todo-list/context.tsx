import { createContext, useContext, useState } from 'react';
import { noop } from 'lodash-es';
import type { TodoItem, FilterMode } from '../types';

export type TodosProviderProps = {
  children: React.ReactNode;
};

export type TodoContextValue = {
  todos: TodoItem[];
  mode: FilterMode;
  setMode: (mode: FilterMode) => void;
  addItem: (title: string) => void;
  updateItem: (id: number, title: string) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  toggleAllItem: () => void;
  removeCompletedItems: () => void;
};

export const TodoContext = createContext<TodoContextValue>({
  todos: [],
  mode: 'ALL',
  setMode: noop,
  addItem: noop,
  updateItem: noop,
  removeItem: noop,
  toggleItem: noop,
  removeAllItems: noop,
  toggleAllItem: noop,
  removeCompletedItems: noop,
});

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [mode, setMode] = useState<FilterMode>('ALL');

  const addItem = (title: string) => {
    setTodos([{ id: Date.now(), title, completed: false }, ...todos]);
  };

  const updateItem = (id: number, title: string) => {
    const _todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: title };
      } else {
        return todo;
      }
    });
    setTodos(_todos);
  };

  const removeItem = (id: number) => {
    const _todos = todos.filter((todo) => todo.id !== id);
    setTodos(_todos);
  };

  const toggleItem = (id: number) => {
    const _todos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodos(_todos);
  };

  const removeAllItems = () => {
    setTodos([]);
  };

  const toggleAllItem = () => {
    const _todos = todos.map((todo) => {
      return { ...todo, completed: !todo.completed };
    });
    setTodos(_todos);
  };

  const removeCompletedItems = () => {
    const _todos = todos.filter((todo) => !todo.completed);
    setTodos(_todos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        mode,
        setMode,
        addItem,
        updateItem,
        removeItem,
        toggleItem,
        removeAllItems,
        toggleAllItem,
        removeCompletedItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
