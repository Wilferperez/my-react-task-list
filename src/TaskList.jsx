import { Divider, Center } from '@chakra-ui/react'
import { Task } from './Task.jsx';

export const TaskList = ({ tasks, onRemovedTask, onToggleCompletedTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <li style={{ listStyleType: "none" }}
                    key={task.id}
                >
                    <Task
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        completed={task.completed}
                        onToggleCompletedTask={onToggleCompletedTask}
                        onRemovedTask={onRemovedTask}
                    />
                    <Center height='10px'>
                        <Divider orientation='vertical' />
                    </Center>
                </li>
            ))}
        </div>
    )
}