import { useState, useEffect } from "react";
import AppContext from "./context";
import { TaskType } from "./context";

import Header from "./components/Header";
import List from "./components/List";

import "./sass/app.scss";

function App() {
  let jsonTodos = localStorage.getItem("todos");
  const items = jsonTodos ? JSON.parse(jsonTodos) : [];

  let jsonTodosComp = localStorage.getItem("todosComp");
  const itemsComp = jsonTodosComp ? JSON.parse(jsonTodosComp) : [];

  const [userInput, setUserInput] = useState<string>("");
  const [todos, setTodos] = useState<TaskType[]>(items);
  const [todosComplete, setTodosComplete] = useState<TaskType[]>(itemsComp);

  useEffect(() => {
    jsonTodos = JSON.stringify(todos);
    localStorage.setItem("todos", jsonTodos);
    jsonTodosComp = JSON.stringify(todosComplete);
    localStorage.setItem("todosComp", jsonTodosComp);
  }, [todos, todosComplete]);

  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 11),
        task: userInput,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    setTodosComplete([...todosComplete.filter((todo) => todo.id !== id)]);
  };

  const handlerToggle = (todo: TaskType) => {
    setTodosComplete([...todosComplete, todo]);
    setTodos([...todos.filter((todos) => todos.id !== todo.id)]);
  };

  const editTask = (todo: TaskType) => {
    let taskValue = todo.task;
    let taskEdit = prompt("Отредактируйте заметку", taskValue);
    if (taskEdit) {
      const newItem: { id: string; task: string } = {
        id: todo.id,
        task: String(taskEdit),
      };

      const arr = todos.filter((todo) => todo.id !== newItem.id);
      setTodos([...arr, newItem]);
      console.log(newItem);
    }
  };

  return (
    <AppContext.Provider
      value={{
        userInput,
        setUserInput,
        todos,
        setTodos,
        handlerToggle,
        removeTask,
        addTask,
        todosComplete,
        editTask,
      }}
    >
      <div className="container">
        <Header />
        <List />
      </div>
    </AppContext.Provider>
  );
}

export default App;
