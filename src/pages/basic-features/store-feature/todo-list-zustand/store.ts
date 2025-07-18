import { create } from 'zustand';
import { TodoItem, FilterMode } from '../types';

type TodoStore = {
  todos: TodoItem[];
  mode: FilterMode;
  addItem: (title: string) => void;
  updateItem: (id: number, title: string) => void;
  removeItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  toggleAllItems: () => void;
  removeCompletedItems: () => void;
  setMode: (mode: FilterMode) => void;
};

export function createTodoStore() {
  return create<TodoStore>((set, get) => ({
    todos: [],
    mode: 'ALL',

    addItem: (title: string) => {
      set((state) => ({
        todos: [{ id: Date.now(), title, completed: false }, ...state.todos],
      }));
    },

    updateItem: (id: number, title: string) => {
      const _todos = get().todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }
        return todo;
      });
      set({ todos: _todos });
    },

    removeItem: (id: number) => {
      const _todos = get().todos.filter((todo) => todo.id !== id);
      set({ todos: _todos });
    },

    toggleItem: (id: number) => {
      const _todos = get().todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      set({ todos: _todos });
    },

    removeAllItems: () => {
      set({ todos: [] });
    },

    toggleAllItems: () => {
      const _todos = get().todos.map((todo) => {
        return { ...todo, completed: !todo.completed };
      });
      set({ todos: _todos });
    },

    removeCompletedItems: () => {
      const _todos = get().todos.filter((todo) => !todo.completed);
      set({ todos: _todos });
    },

    setMode: (mode: FilterMode) => {
      set({ mode });
    },
  }));
}
