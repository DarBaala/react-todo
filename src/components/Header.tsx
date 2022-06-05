import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <input className="header__input" placeholder="Добавить дело..." />
      <button className="header__button">
        <img src="/img/plus-button.svg" alt="Button: plus" />
      </button>
    </header>
  );
};

export default Header;
