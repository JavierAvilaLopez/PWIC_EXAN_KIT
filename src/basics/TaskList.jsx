import React from "react";

// Renderiza una lista de tareas utilizando props.
const TaskList = ({ tasks }) => {
  return (
    <div className="card p-3 shadow-sm">
      <h4 className="mb-2">Lista de tareas</h4>
      <ul className="list-group list-group-flush">
        {tasks.map((task) => (
          <li className="list-group-item" key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
