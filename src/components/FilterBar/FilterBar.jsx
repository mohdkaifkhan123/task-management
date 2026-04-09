import './FilterBar.css'

function FilterBar({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, filterPriority, setFilterPriority, viewMode, setViewMode, onAddTask }) {
  return (
    <div className="controls">
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="view-controls">
        <button
          className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          List View
        </button>
        <button
          className={`view-btn ${viewMode === 'card' ? 'active' : ''}`}
          onClick={() => setViewMode('card')}
        >
          Card View
        </button>
        <button
          className="add-btn"
          onClick={onAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default FilterBar