import { useState } from "react";
import data from "../data/data.json";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

let nextId = null;
export default function TaskApp() {
  const [tasks, setTasks] = useState(data);

  function handleAddTask(text) {
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }
  return (
    <div className="flex justify-center mt-5">
      <div className="w-3/12">
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}
