import { useContext } from "react";
import AppContext from "../context";

const List = () => {
  const { todos, handlerToggle, removeTask, todosComplete, editTask } =
    useContext(AppContext);

  return (
    <div className="list">
      <div className="list__wrapper">
        <h2 className="list__title">Список дел:</h2>
        {todos.length > 0 ? (
          <ul className="list__ream">
            {todos.map((todo) => (
              <li key={todo.id} className="list__items">
                <p>{todo.task}</p>
                <button
                  onClick={() => handlerToggle(todo)}
                  className="list__button"
                >
                  <img src="img/plus-button.svg" alt="Button: plus" />
                </button>
                <button onClick={() => editTask(todo)} className="list__button">
                  <img src="img/pencil-button.svg" alt="Button: pencil" />
                </button>
                <button
                  onClick={() => removeTask(todo.id)}
                  className="list__button"
                >
                  <img src="img/remove-button.svg" alt="Button: remove" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="list__title"> Пока ничего не добавлено :( </h2>
        )}
      </div>
      <div className="list__wrapper">
        <h2 className="list__title">Выполненные дела:</h2>
        {todosComplete.length > 0 ? (
          <ul className="list__ream">
            {todosComplete.map((todoComp) => (
              <li key={todoComp.id} className="list__items">
                <p> {todoComp.task}</p>
                <button
                  onClick={() => removeTask(todoComp.id)}
                  className="list__button"
                >
                  <img src="img/remove-button.svg" alt="Button: remove" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="list__title"> Пока Вы ничего не выполнили :( </h2>
        )}
      </div>
    </div>
  );
};

export default List;
