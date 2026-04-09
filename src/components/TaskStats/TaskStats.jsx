import './TaskStats.css'

function TaskStats({ tasks }) {
  const stats = {
    total: tasks.length,
    pending: tasks.filter(task => task.status === 'pending').length,
    completed: tasks.filter(task => task.status === 'completed').length
  }

  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-number">{stats.total}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat">
        <span className="stat-number">{stats.pending}</span>
        <span className="stat-label">Pending</span>
      </div>
      <div className="stat">
        <span className="stat-number">{stats.completed}</span>
        <span className="stat-label">Completed</span>
      </div>
    </div>
  )
}

export default TaskStats