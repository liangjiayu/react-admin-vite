export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const REMOVE_COMPLETED_ITEMS = 'REMOVE_COMPLETED_ITEMS';
export const SET_MODE = 'SET_MODE';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type FilterMode = 'ALL' | 'ACTIVE' | 'COMPLETED';

export type TodoState = {
  mode: FilterMode;
  todos: Todo[];
};

export type TodoAction =
  | { type: typeof ADD_ITEM; payload: { title: string } }
  | { type: typeof UPDATE_ITEM; payload: { id: number; title: string } }
  | { type: typeof REMOVE_ITEM; payload: { id: number } }
  | { type: typeof TOGGLE_ITEM; payload: { id: number } }
  | { type: typeof REMOVE_ALL_ITEMS }
  | { type: typeof TOGGLE_ALL }
  | { type: typeof REMOVE_COMPLETED_ITEMS }
  | { type: typeof SET_MODE; payload: { mode: FilterMode } };

export type TodoDispatch = (action: TodoAction) => void;

export type TodoContextValue = {
  state: TodoState;
  dispatch: TodoDispatch;
};
