import Task from './Task';

function Tasks({ tasks, onDelete, onToggle }) {

    return (
        <div className="scrollable">
            {tasks.map((task, index) =>
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
            )}
        </div>
    )
}

export default Tasks
