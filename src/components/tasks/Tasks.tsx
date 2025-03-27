import { type ListOfTask } from "../types/types";
import { Task } from "../task/Task";

interface Props {
  tasks: ListOfTask;
}

export const Tasks = ({ tasks }: Props) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={`${task.completed ? "completed" : ""}`}>
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
          />
        </li>
      ))}
    </ul>
  );
};
