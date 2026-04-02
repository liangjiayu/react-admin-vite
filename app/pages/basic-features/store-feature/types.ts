export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export type FilterMode = 'ALL' | 'ACTIVE' | 'COMPLETED';
