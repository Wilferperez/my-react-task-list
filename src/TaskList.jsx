import { Task } from './Task.jsx';

export const TaskList = ({ tasks, onRemovedTask, onToggleCompletedTask }) => {
    return (
        <ul className='todo-list'>
            {tasks.map(task => (
                <li 
                    key={task.id}
                    className={`${task.completed ? 'completed' : ''}`}
                >
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        completed={task.completed}
                        onToggleCompletedTask={onToggleCompletedTask}
                        onRemovedTask={onRemovedTask}
                    />
                </li>
            ))}
        </ul>
    )
}