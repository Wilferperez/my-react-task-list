import { Filters } from "./Filters";

export const Footer = ({ activeCount = 0, completedCount, filterSelected, handleFilterChange, onClearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters 
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}