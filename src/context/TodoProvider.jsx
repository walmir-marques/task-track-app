import React from "react";
import todoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [taskData, setTaskData] = React.useState([]);

  const selectTag = (tag) => {
    if (taskData.toLocaleString.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  return (
    <todoContext.Provider value={{ taskData, setTaskData, selectTag }}>
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
