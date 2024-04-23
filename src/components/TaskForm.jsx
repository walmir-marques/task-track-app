import React, { useContext, useState } from "react";
import Tag from "./Tag";
import todoContext from "../context/TodoContext";

const TaskForm = () => {
  const { taskData, setTaskData } = useContext(todoContext);
  const [task, setTask] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {};

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskData((prev) => {
      // Aqui, estamos apenas adicionando a nova tarefa ao array existente, não iterando sobre ele
      return [...prev, task];
    });
    // Resetar os campos do formulário após a submissão
    setTask({ task: "", status: "todo" });
    console.log(taskData);
  };

  return (
    <header className="flex justify-center items-center  mt-4">
      <form
        className="w-3/5 border border-gray-200 p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Digite sua tarefa ..."
          className="input-task"
          onChange={handleChange}
          value={task.task} // Binding the input value to the task property
          name="task"
        />
        <div className="flex justify-between items-center">
          <Tag tagName="Pessoal" />
          <Tag tagName="Financeiro" />
          <Tag tagName="Estudos" />
          <Tag tagName="Lazer" />
          <div className="flex gap-4">
            <select
              className="text-sm border border-gray-100 rounded-sm w-32 h-10 py-1 "
              onChange={handleChange}
              value={task.status} // Binding the select value to the status property
              name="status"
            >
              <option value="todo">Para fazer</option>
              <option value="doing">Fazendo</option>
              <option value="done">Feito</option>
            </select>
            <button
              className="p-2 bg-blue-400 text-white rounded-md cursor-pointer"
              type="submit"
            >
              + Adicionar Tarefa
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
