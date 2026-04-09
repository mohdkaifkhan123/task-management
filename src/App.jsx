import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import TaskStats from './components/TaskStats/TaskStats'
import FilterBar from './components/FilterBar/FilterBar'
import Modal from './components/Modal/Modal'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [viewMode, setViewMode] = useState('list')
  const [editingTask, setEditingTask] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleAddTask = () => {
    setEditingTask(null)
    setShowForm(true)
  }

  const handleEdit = (task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleSubmit = (formData) => {
    if (editingTask) {
      setTasks(tasks.map(task =>
        task.id === editingTask.id
          ? { ...formData, id: editingTask.id }
          : task
      ))
      setEditingTask(null)
    } else {
      const newTask = {
        ...formData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      }
      setTasks([...tasks, newTask])
    }
    setShowForm(false)
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority
    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="app">
      <header className="header">
        <h1>Task Management Dashboard</h1>
        <TaskStats tasks={tasks} />
      </header>

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onAddTask={handleAddTask}
      />

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <TaskForm
          task={editingTask}
          onSubmit={handleSubmit}
          onCancel={() => setShowForm(false)}
        />
      </Modal>

      <TaskList
        tasks={filteredTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
        viewMode={viewMode}
        setTasks={setTasks}
      />
    </div>
  )
}

export default App
