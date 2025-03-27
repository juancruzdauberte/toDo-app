import { type Task as TypeTask } from "../types/types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

type Props = TypeTask;

export const Task = ({ id, completed, title }: Props) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <p> no existe el contexto</p>;
  }

  const { handleRemoveTask, handleCompletedTask } = taskContext;

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={(e) =>
          handleCompletedTask({ id, completed: e.target.checked })
        }
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => handleRemoveTask(id)}></button>
    </div>
  );
};
