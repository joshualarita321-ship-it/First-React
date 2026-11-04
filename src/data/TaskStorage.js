const STORAGE_KEY = 'student-planner-tasks';

export const starterTasks = [
  { id: 1, title: 'Math Quiz', category: 'Quiz', priority: 'High', deadline: '2026-11-10', completed: false },
  { id: 2, title: 'School Project', category: 'Project', priority: 'Medium', deadline: '2026-11-12', completed: true },
  { id: 3, title: 'Database Report', category: 'Assignment', priority: 'Medium', deadline: '2026-11-15', completed: false }
];

export function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : starterTasks;
  } catch {
    return starterTasks;
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
