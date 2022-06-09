import { createContext, Dispatch, SetStateAction } from "react";

export interface AppContextInterface {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  todos: string[];
  setTodos: Dispatch<SetStateAction<string[]>>;
  todosComplete: string[];
  handlerToggle: (id: string) => void;
  removeTask: (id: string) => void;
  addTask: (userInput: string) => void;
}
const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

export default AppContext;
