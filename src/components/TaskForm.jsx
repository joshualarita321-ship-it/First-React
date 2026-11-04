import { useState } from 'react';

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Assignment');
  const [priority, setPriority] = useState('Medium');
  const [deadline, setDeadline] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() || !deadline) return;
    onAdd({ title: title.trim(), category, priority, deadline, completed: false });
    setTitle('');
    setCategory('Assignment');
    setPriority('Medium');
    setDeadline('');
  }

  return (
    <form onSubmit={handleSubmit} className="row g-2 align-items-end mb-4">
      <div className="col-md-4">
        <label className="form-label">Task name</label>
        <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. JavaScript activity" required />
      </div>
      <div className="col-md-2">
        <label className="form-label">Category</label>
        <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
          <option>Assignment</option><option>Quiz</option><option>Project</option><option>Exam</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="form-label">Priority</label>
        <select className="form-select" value={priority} onChange={e => setPriority(e.target.value)}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="form-label">Deadline</label>
        <input type="date" className="form-control" value={deadline} onChange={e => setDeadline(e.target.value)} required />
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary w-100" type="submit">+ Add Task</button>
      </div>
    </form>
  );
}
export default TaskForm;
