export const Task = ({ id, name, completed, onRemovedTask, onToggleCompletedTask }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={(event) => {
                    onToggleCompletedTask({ id, completed: event.target.checked })
                }}
            />
            <label>{name}</label>
            <button
                className="destroy"
                onClick={()=>{
                    console.log({id})
                    onRemovedTask({id})
                }}
            />
        </div>
    )
}