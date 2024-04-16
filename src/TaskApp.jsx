import { useState } from "react";
import data from "../data/data.json";
import TaskList from "./components/TaskList";
export default function TaskApp() {
const [tasks, setTasks] = useState(data)
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  )
}
