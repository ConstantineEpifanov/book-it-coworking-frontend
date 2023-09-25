import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/EntryForm/EntryForm";
import Popup from "./components/Popup/Popup";
import Button from "./components/UI-kit/Button/Button";
import Input from "./components/UI-kit/Input/Input";

function App() {
  // временно выставлено true, далее нужно поменять значение на false
  const [isOpenPopup, setIsOpenPopup] = React.useState(true);

  // для открытия попапа
  // const handleOpenPopup = () => {
  //  setIsOpenPopup(true);
  // }

  // для закрытия попапа
  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };
  return (
    <div className="App">
      {/* пример формы */}
      <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
        <EntryForm title="Вход">
          <Input inputType="email" inputPlaceholder="Email" />
          <Input inputType="password" inputPlaceholder="Пароль" />
          <Button
            btnClass="button_type_form"
            btnType="button"
            btnText="Войти"
            onClick={() => {}}
          />
          <Button
            btnClass="button_type_link"
            btnType="button"
            btnText="Зарегистрироваться"
            onClick={() => {}}
          />
        </EntryForm>
      </Popup>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
