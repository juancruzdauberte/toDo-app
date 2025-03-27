import { createContext, ReactNode, useState } from "react";
import { ListOfTask } from "../types/types";
import { TaskContextType } from "../types/types";

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

const mockToDos: ListOfTask = [
  {
    id: "1",
    title: "gim",
    completed: true,
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

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState(mockToDos);

  const handleRemoveTask = (id: string): void => {
    const newListTasks = tasks.filter((task) => task.id !== id);
    setTasks(newListTasks);
  };

  const handleCompletedTask = ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }): void => {
    const newListTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed } : task
    );

    setTasks(newListTasks);
  };

  const onClearCompleted = (): void => {
    const newListTasks = tasks.filter((task) => !task.completed);
    setTasks(newListTasks);
  };

  const activeCount = tasks.filter((task) => !task.completed).length;

  const completedCount = tasks.length - activeCount;

  let value = {
    handleRemoveTask,
    tasks,
    handleCompletedTask,
    completedCount,
    activeCount,
    onClearCompleted,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
