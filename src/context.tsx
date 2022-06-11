import { createContext, Dispatch, SetStateAction } from "react";

export interface TaskType {
  id: string;
  task: string;
  length?: number;
}

export interface AppContextInterface {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  todos: TaskType[];
  setTodos: Dispatch<SetStateAction<TaskType[]>>;
  todosComplete: TaskType[];
  handlerToggle: (todo: TaskType, id: string) => void;
  removeTask: (id: string) => void;
  addTask: (userInput: string) => void;
}
const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export default AppContext;
