import "./App.css";
import { Tasks } from "./tasks/Tasks";
import { TaskContext } from "./context/TaskContext";
import { useContext } from "react";

function App() {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    return <p> no existe el contexto</p>;
  }

  const { tasks } = taskContext;

  return (
    <div className="todoapp">
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
