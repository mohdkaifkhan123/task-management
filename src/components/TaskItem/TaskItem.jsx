import './TaskItem.css'

function TaskItem({
  task,
  onEdit,
  onDelete,
  onToggleStatus,
  viewMode,
  isDragging = false,
  dragOver = false,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop
}) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id)
    }
  }

  return (
    <div
      className={`task ${viewMode} ${task.status} priority-${task.priority} ${isDragging ? 'dragging' : ''} ${dragOver ? 'drag-over' : ''}`}
      draggable
      onDragStart={(e) => onDragStart && onDragStart(e, task)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className="drag-handle">⋮⋮</div>
      <div className="task-content">
        <h3 className={task.status === 'completed' ? 'completed' : ''}>{task.title}</h3>
        <p className={`task-description ${task.status === 'completed' ? 'completed' : ''}`}>
          {task.description}
        </p>
        <div className="task-meta">
          <span className={`priority priority-${task.priority}`}>
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </span>
          {task.dueDate && (
            <span className="due-date">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
          <span className={`status status-${task.status}`}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      </div>
      <div className="task-actions">
        <button
          className="status-btn"
          onClick={() => onToggleStatus(task.id)}
        >
          {task.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem