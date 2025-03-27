export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type ListOfTask = Task[];

export type TaskId = Pick<Task, "id">;
export type TaskTitle = Pick<Task, "title">;
export type TaskCompleted = Pick<Task, "completed">;
