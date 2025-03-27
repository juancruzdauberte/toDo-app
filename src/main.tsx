import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import "todomvc-app-css/index.css";
import { TaskProvider } from "./components/context/TaskContext.tsx";
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <>
    <TaskProvider>
      <App />
    </TaskProvider>
  </>
);
