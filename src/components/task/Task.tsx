import { type Task as TypeTask } from "../types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

type Props = TypeTask;

export const Task = ({ id, completed, title }: Props) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <p> no existe el contexto</p>;
  }

  const { handleRemoveTask } = taskContext;
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => handleRemoveTask({ id })}
      ></button>
    </div>
  );
};
