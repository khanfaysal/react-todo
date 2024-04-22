/* eslint-disable react/prop-types */
export default function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="mt-1">There is no exists task right now!</p>;
  }
  console.log(tasks, "tasks");
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li className="flex gap-x-2 mt-2" key={task.id}>
            <p>{`${index + 1}. ${task.text}`}</p>
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
