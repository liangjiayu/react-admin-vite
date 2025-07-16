import { createContext, useContext } from 'react';
import {
  TodoAction,
  TodoContextValue,
  TodoState,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  TOGGLE_ITEM,
  REMOVE_ALL_ITEMS,
  TOGGLE_ALL,
  REMOVE_COMPLETED_ITEMS,
  SET_MODE
} from './types';

export const initialState: TodoState = {
  mode: 'ALL',
  todos: [],
};

export function todoReducer(state: TodoState, action: TodoAction) {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        todos: [{ id: Date.now(), title: action.payload.title, completed: false }, ...state.todos],
      };
    }

    case UPDATE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, title: action.payload.title };
          } else {
            return todo;
          }
        }),
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    case TOGGLE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    }

    case REMOVE_ALL_ITEMS: {
      return {
        ...state,
        todos: [],
      };
    }

    case TOGGLE_ALL: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return { ...todo, completed: !todo.completed };
        }),
      };
    }

    case REMOVE_COMPLETED_ITEMS: {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };
    }

    case SET_MODE: {
      return {
        ...state,
        mode: action.payload.mode,
      };
    }
    default:
      return state;
  }
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
