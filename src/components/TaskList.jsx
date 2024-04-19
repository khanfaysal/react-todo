/* eslint-disable react/prop-types */
export default function TaskList({ tasks, onDeleteTask }) {
  console.log(tasks, "tasks");
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li className="flex gap-x-2 mt-2" key={task.id}>
            <p>{task.text}</p>
            <button
              className="border rounded bg-red-200 p-1"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
