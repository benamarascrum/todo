import React, { useState } from "react";

export default function Todo() {
  //State (Data)
  const [getterTasks, setterTasks] = useState([]);
  const [getTask, setTask] = useState({
    id: "",
    task: "",
  });

  //Comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask({
      id: "",
      task: "",
    });
  };

  const handleAdd = () => {
    setterTasks([...getterTasks, getTask]);
    localStorage.setItem(
      "LOCAL_KEY_TASKS",
      JSON.stringify([...getterTasks, getTask])
    );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = new Date().getTime();
    setTask({ ...getTask, [name]: value, id: id });
  };

  //Affichage
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {!getterTasks.length
            ? "0"
            : getterTasks.length === 1
            ? "1"
            : getterTasks.length > 1
            ? `${getterTasks.length}`
            : null}
        </div>

        <input
          type="text"
          placeholder="Add a task..."
          name="task"
          value={getTask.task}
          onChange={handleChange}
        />
        <button onClick={handleAdd}> + </button>
      </form>

      {getterTasks.map(function (getTask) {
        return (
          <ul key={getTask.id}>
            <li>{getTask.task}</li>
          </ul>
        );
      })}
    </>
  );
}
