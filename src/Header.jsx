import { CreateTask } from "./CreateTask";

export const Header = ({ onAddTask }) => {
    return (
        <header className="header">
            <h1>Todo App</h1>
            <CreateTask saveTask={onAddTask} />
        </header>
    )
}