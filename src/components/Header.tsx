import { useContext } from "react";

import AppContext from "../context";

const Header: React.FC = () => {
  const { userInput, setUserInput, addTask } = useContext(AppContext);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let e = (event.currentTarget as any).value;
    setUserInput(e);
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (userInput.length > 0) {
      event.preventDefault();
      addTask(userInput);
      setUserInput("");
    } else {
      alert("Пустое поле !");
    }
  };

  return (
    <header className="header">
      <form className="header__form" onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          className="header__input"
          placeholder="Добавить дело..."
        />
        <button className="header__button">
          <img src="/img/plus-button.svg" alt="Button: plus" />
        </button>
      </form>
    </header>
  );
};

export default Header;
