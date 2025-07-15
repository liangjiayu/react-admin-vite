import { createContext, useContext } from 'react';

export const initialState = {
  mode: 'ALL',
  todos: [],
};

export function todoReducer(state: any, action: any) {
  console.log('todoReducer', state);

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), title: action.payload.title, completed: false }],
      };
    default:
      return state;
  }
}

export const TodoContext = createContext({
  state: initialState,
  dispatch: todoReducer,
});

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
