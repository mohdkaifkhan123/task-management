# Task Management Dashboard

A clean React-based task management dashboard built with Vite.

## Overview

This application lets users create, edit, delete, search, filter, and track task status. It supports:

- Task creation with title, description, priority, and due date
- List and card views
- Inline task actions for mark complete/pending, edit, and delete

**Screenshots**
<img width="1770" height="898" alt="Taskadded" src="https://github.com/user-attachments/assets/64f7cbe7-50a9-433f-b4ba-fcd1c9f77c82" />

- Persistent task storage using `localStorage`
- Search by task title or description
- Filters for status and priority
- Drag-and-drop reordering of tasks
- Smooth UI animations and micro-interactions



1. **Dashboard overview** — shows the task summary counts, search and filter controls, view toggle, and initial empty state.
2. **Add Task modal** — task creation form with title, description, priority, and due date fields.
3. **Task list view** — example tasks displayed in list mode, with pending/completed badge states.
4. **Search and status update** — filtered task list after search and completion actions.

> If you are using the attached screenshot files, refer to them as screenshot 1, 2, 3, and 4 for the views above.

## Project Structure

- `src/App.jsx` — main page logic and state management
- `src/App.css` — layout, UI styling, animations, and responsive behavior
- `src/main.jsx` — React entry point
- `src/components/FilterBar` — search, filter, list/card toggle, and add task controls
- `src/components/Modal` — reusable modal wrapper for form display
- `src/components/TaskForm` — task creation and editing form
- `src/components/TaskList` — renders the current task list and handles drag-and-drop
- `src/components/TaskItem` — single task cards with actions
- `src/components/TaskStats` — total/pending/completed counters
- `src/hooks/useLocalStorage.js` — custom hook for local storage persistence
- `src/hooks/useDragAndDrop.js` — custom hook for drag and drop ordering

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/mohdkaifkhan123/task-management.git
cd task-management
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:5173
```

## Usage

- Click **Add Task** to open the task form.
- Provide a title, optional description, choose priority, and set a due date.
- Use **List View** or **Card View** toggles to switch layout.
- Search tasks by title/description using the search box.
- Filter tasks by status or priority.
- Click **Mark Complete** / **Mark Pending** to update status.
- Click **Edit** to update a task, or **Delete** to remove it.
- Drag tasks by their handle to reorder them directly.

## Design Decisions

- **Component-based architecture**: The app is split into reusable components for easier maintenance.
- **Local storage persistence**: Tasks persist across page refreshes without a backend.
- **Card and list views**: User choice for display style improves usability.
- **Modal task form**: Keeps the main UI clean and allows focused data entry.
- **Drag-and-drop ordering**: Makes task prioritization intuitive.
- **Responsive styling**: The app adapts for desktop and smaller screens.
- **Animated feedback**: Button hover effects, modal transitions, and task hover states make the UI feel polished.

## Notes

- The app uses modern React features and should be compatible with current versions of React and Vite.
- If you add screenshot files to the repository, place them in the repo root or a `docs/` folder and update the image paths accordingly.
- The current implementation does not require a backend; task data is stored entirely in `localStorage`.
