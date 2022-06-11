import { useState } from "react";
import AppContext from "./context";
import { TaskType } from "./context";

import Header from "./components/Header";
import List from "./components/List";

import "./sass/app.scss";

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [todos, setTodos] = useState<TaskType[]>([]);
  const [todosComplete, setTodosComplete] = useState<TaskType[]>([]);

  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(1, 9),
        task: userInput,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handlerToggle = (todo: TaskType) => {
    setTodosComplete([...todosComplete, todo]);
    setTodos([...todos.filter((todos) => todos.id !== todo.id)]);
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
