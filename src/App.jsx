/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/Forms/EntryForm/EntryForm";
import Popup from "./components/Popup/Popup";
import Button from "./components/UI-kit/Button/Button";
import Input from "./components/UI-kit/Input/Input";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PasswordInput from "./components/UI-kit/PasswordInput/PasswordInput";
import { MainMap } from "./components/Map/Map";

function App() {
  // временно выставлено true, далее нужно поменять значение на false
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  // для открытия попапа
  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  // для закрытия попапа
  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  return (
    <div className="App">
      <Header onOpenPopup={handleOpenPopup} />
      <MainMap />
      <Routes>
        <Route
          path="/"
          element={
            <SectionTitle titleText="Здесь могла бы быть ваша реклама" />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* пример формы */}
      <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
        <EntryForm title="Войдите на сайт">
          <Input
            inputType="email"
            inputPlaceholder="Email"
            inputName="emailLogin"
          />
          <PasswordInput
            inputName="passwordLogin"
            inputPlaceholder="Пароль"
            inputInfo="Забыли пароль?"
          />
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
      <Footer />
    </div>
  );
}

export default App;
