import { useDragAndDrop } from '../../hooks/useDragAndDrop'
import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

function TaskList({ tasks, onEdit, onDelete, onToggleStatus, viewMode, setTasks }) {
  const {
    draggedTask,
    dragOverIndex,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop
  } = useDragAndDrop(tasks, setTasks)

  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        <p>No tasks found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className={`tasks-container ${viewMode}`}>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
          viewMode={viewMode}
          isDragging={draggedTask?.id === task.id}
          dragOver={dragOverIndex === index}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
        />
      ))}
    </div>
  )
}

export default TaskList