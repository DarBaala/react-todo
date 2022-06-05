import React from "react";

const List = () => {
  return (
    <div className="list">
      <div className="list__wrapper">
        <h2 className="list__title">Список дел:</h2>
        <ul className="list__ream">
          <li className="list__items">
            <p>Покормить кота</p>
            <button className="list__button">
              <img src="/img/plus-button.svg" alt="Button: plus" />
            </button>
            <button className="list__button">
              <img src="/img/remove-button.svg" alt="Button: remove" />
            </button>
          </li>
        </ul>
      </div>
      <div className="list__wrapper">
        <h2 className="list__title">Выполненные дела:</h2>
        <ul className="list__ream">
          <li className="list__items">
            <p>Сходить к врачу</p>
            <button className="list__button">
              <img src="/img/remove-button.svg" alt="Button: remove" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
