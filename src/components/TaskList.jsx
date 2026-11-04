function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p className="text-secondary mb-0">No tasks found. Add your first task above.</p>;

  return (
    <div>
      {tasks.map(task => (
        <div className="task-row row align-items-center g-2" key={task.id}>
          <div className="col-1">
            <input className="form-check-input" type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} aria-label={`Mark ${task.title} completed`} />
          </div>
          <div className="col-md-4 col-11">
            <div className={task.completed ? 'text-decoration-line-through text-secondary' : 'fw-semibold'}>{task.title}</div>
            <small className="text-secondary">{task.category} • Due {task.deadline}</small>
          </div>
          <div className="col-md-2 col-5">
            <span className={`priority priority-${task.priority.toLowerCase()}`}>{task.priority}</span>
          </div>
          <div className="col-md-2 col-4">
            <span className={`status ${task.completed ? 'status-completed' : 'status-pending'}`}>{task.completed ? 'Completed' : 'Pending'}</span>
          </div>
          <div className="col-md-2 col-3 text-end">
            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
