/* eslint-disable react/prop-types */

export default function TaskList({ tasks, onDeleteTask, onChangeTask }) {
  if (tasks.length === 0) {
    return <p className="mt-1">There is no exists task right now!</p>;
  }
  console.log(tasks, "tasks");
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li className="flex gap-x-2 mt-2" key={task.id}>
            <Task task={task} onDelete={onDeleteTask} onChange={onChangeTask} />
            <p>{`${index + 1}. ${task.text}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onDelete, onChange }) {
  return (
    <>
      <label htmlFor="">
        <input
          type="checkbox"
          onChange={(e) => {
            onChange({ ...task, done: e.target.checked });
          }}
        />
      </label>
      <button
        className="border rounded bg-red-400 p-1"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </>
  );
}
