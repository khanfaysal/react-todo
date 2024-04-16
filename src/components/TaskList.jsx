// eslint-disable-next-line react/prop-types
export default function TaskList({tasks}) {
console.log(tasks, "tasks")
  return (
    <div>
      {tasks.map(task => (
        <ul key={task.id}>
            <li>{task.text}</li>
        </ul>
      ))}
    </div>
  )
}
