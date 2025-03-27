import { type TASKS_FILTERS } from "../consts";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type ListOfTask = Task[];

export interface TaskContextType {
  tasks: ListOfTask;
  handleRemoveTask: ({ id }: string) => void;
  handleCompletedTask: ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => void;
  onClearCompleted: () => void;
  activeCount: number;
  completedCount: number;
}

export type FilterValue = (typeof TASKS_FILTERS)[keyof typeof TASKS_FILTERS];
