import React from "react";

const List = () => {
  return (
    <div className="list">
      <div className="list-unfilled">
        <h2>Список дел:</h2>
        <ul className="list-unfilled__layout">
          <li className="list-unfilled__taks">
            <p>Покормить кота</p>
            <button className="list-unfilled__button--plus">
              <img src="/img/plus-button.svg" alt="Button: plus" />
            </button>
            <button className="list-unfilled__button--remove">
              <img src="/img/remove-button.svg" alt="Button: remove" />
            </button>
          </li>
        </ul>
      </div>
      <div className="list-completed">
        <h2>Выполненные дела:</h2>
        <ul className="list-completed__layout">
          <li className="list-completed__taks">
            <p>Сходить к врачу</p>
            <button className="list-completed__button--remove">
              <img src="/img/remove-button.svg" alt="Button: remove" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
