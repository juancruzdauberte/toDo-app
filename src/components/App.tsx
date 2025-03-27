import "./App.css";
import { Tasks } from "./tasks/Tasks";
import { TaskContext } from "./context/TaskContext";
import { useContext, useState } from "react";
import { Footer } from "./footer/Footer";
import { TASKS_FILTERS } from "./consts";
import { FilterValue } from "./types/types";

function App() {
  const taskContext = useContext(TaskContext);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TASKS_FILTERS.ALL
  );
  if (!taskContext) {
    return <p> no existe el contexto</p>;
  }

  const { tasks } = taskContext;

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const tasksFiltered = tasks.filter((task) => {
    if (filterSelected === TASKS_FILTERS.PENDING) return !task.completed;
    if (filterSelected === TASKS_FILTERS.COMPLETED) return task.completed;
    return task;
  });

  return (
    <div className="todoapp">
      <Tasks tasks={tasksFiltered} />
      <Footer
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
