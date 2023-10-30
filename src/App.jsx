import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { TaskList } from './TaskList'
import { TASK_FILTERS } from './consts';
import { Footer } from './Footer';

const mockTasks = [
  {
    id: 1,
    name: 'Hacer la tarea',
    completed: false
  },
  {
    id: 2,
    name: 'Ir al gym',
    completed: true
  }
];

function App() {
  const [tasks, setTasks] = useState(mockTasks)
  const [filterSelected, setFilterSelected] = useState(TASK_FILTERS.ALL)

  const handleRemove = ({id}) => {
    const newTasks = tasks.filter(task => task.id != id);
    setTasks(newTasks);
  }

  const handleCompleted = ({ id, completed }) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed }
      }
      return task
    });
    setTasks(newTasks);
  }

  const handleFilterChange = (filter) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTasks = tasks.filter(task => !task.completed)
    setTasks(newTasks)
  }

  const activeCount = tasks.filter(task => !task.completed).length
  const completedCount = tasks.length - activeCount

  const filterTasks = tasks.filter(task => {
    if (filterSelected === TASK_FILTERS.ACTIVE) return !task.completed
    if (filterSelected === TASK_FILTERS.COMPLETED) return task.completed
    return task
  })

  const handleAddTask = ({ name }) => {
    const newTask = {
      id: crypto.randomUUID(),
      name,
      completed: false
    }
    const newTasks = [ ...tasks, newTask]
    setTasks(newTasks)
  }

  return (
    <div className='todoapp'>
      <Header onAddTask={handleAddTask} />
      <TaskList
        onRemovedTask={handleRemove}
        onToggleCompletedTask={handleCompleted}
        tasks={filterTasks}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
