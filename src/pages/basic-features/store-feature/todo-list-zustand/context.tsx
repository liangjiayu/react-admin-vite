import { createContext, useContext, useState } from 'react';
import { createTodoStore } from './store';
import { useStore } from 'zustand';

const TodoContext = createContext<ReturnType<typeof createTodoStore> | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(createTodoStore);

  return <TodoContext.Provider value={store}>{children}</TodoContext.Provider>;
}

export function useTodoContext() {
  const store = useContext(TodoContext)!;
  if (!store) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return useStore(store);
}
