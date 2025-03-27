import { createContext, ReactNode, useState } from "react";
import { ListOfTask } from "../types";
import { type TaskId } from "../types";

interface TaskContextType {
  tasks: ListOfTask;
  handleRemoveTask: ({ id }: TaskId) => void;
}

type TaskProvider = {
  children: ReactNode;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

const mockToDos: ListOfTask = [
  {
    id: "1",
    title: "gim",
    completed: false,
  },
  {
    id: "2",
    title: "curso",
    completed: true,
  },
  {
    id: "3",
    title: "futbol",
    completed: false,
  },
  {
    id: "4",
    title: "futbol",
    completed: false,
  },
];

export const TaskProvider = ({ children }: TaskProvider) => {
  const [tasks, setTasks] = useState(mockToDos);

  const handleRemoveTask = ({ id }: TaskId): void => {
    const newListTasks = tasks.filter((task) => task.id !== id);
    setTasks(newListTasks);
  };

  let value = { handleRemoveTask, tasks };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
