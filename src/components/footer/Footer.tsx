import { useContext } from "react";
import { Filters } from "../filters/Filters";
import { type FilterValue } from "../types/types";
import { TaskContext } from "../context/TaskContext";

interface Props {
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer = ({ filterSelected, handleFilterChange }: Props) => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <p>Cargando...</p>;
  }

  const { activeCount, completedCount, onClearCompleted } = taskContext;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        Tareas pendientes
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completadas
        </button>
      )}
    </footer>
  );
};
