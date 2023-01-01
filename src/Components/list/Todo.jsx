import React, { useEffect, useState } from "react";

export default function Todo() {
  //State (Data)
  const [getterTasks, setterTasks] = useState([]);
  const [getTask, setTask] = useState({
    id: "",
    task: "",
  });

  //Comportement
  useEffect(() => {
    if (localStorage.getItem("LOCAL_KEY_TASKS")) {
      const storedList = JSON.parse(localStorage.getItem("LOCAL_KEY_TASKS"));
      setterTasks(storedList);
    }
  }, []);

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

  const handleDelete = (e) => {
    // creer une copie de la data
    const copyTasks = [...getterTasks];

    //manipuler la copie state
    const updateTasks = copyTasks.filter((item) => item.id !== e);

    //modifier le state avec le setter
    setterTasks(updateTasks);
    localStorage.setItem("LOCAL_KEY_TASKS", JSON.stringify(updateTasks));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = new Date().getTime();
    setTask({ ...getTask, [name]: value, id: id });
  };

  const handleClear = () => {
    setterTasks([]);
    localStorage.removeItem("LOCAL_KEY_TASKS");
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

      {getterTasks.map(function (item) {
        return (
          <ul key={item.id}>
            <li>
              {item.task}
              <button onClick={() => handleDelete(item.id)}> x </button>
            </li>
          </ul>
        );
      })}

      {!getterTasks.length ? null : (
        <button onClick={() => handleClear()}>clear</button>
      )}
    </>
  );
}
