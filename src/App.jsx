/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import EntryForm from "./components/Forms/EntryForm/EntryForm";
import Popup from "./components/Popup/Popup";
import Button from "./components/UI-kit/Button/Button";
import Input from "./components/UI-kit/Input/Input";

import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import PasswordInput from "./components/UI-kit/PasswordInput/PasswordInput";
import Contacts from "./components/Contacts/Contacts";
import { Main } from "./components/Main/Main";
import { CoworkingList } from "./components/CoworkingList/CoworkingList";
import { RulesQuestions } from "./components/RulesQuestions/RulesQuestions";
import { ProfileDashboard } from "./components/ProfileDashboard/ProfileDashboard";
import { Profile } from "./components/Profile/Profile";
import { exampleCoworkingsData } from "./config/exampleCoworkingsData";
import { exampleEventsData } from "./config/exampleEventsData";
import { user, favorites, bookings } from "./config/exampleProfileData";

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
      <Routes>
        <Route
          path="/"
          element={
            <Main
              coworkingsArray={exampleCoworkingsData}
              eventsArray={exampleEventsData}
            />
          }
        />

        <Route
          path="/points"
          element={<CoworkingList data={exampleCoworkingsData} />}
        />
        <Route path="/faq" element={<RulesQuestions />} />
        <Route path="/profile" element={<ProfileDashboard />} />
        <Route
          path="/profile/*"
          element={
            <Profile user={user} bookings={bookings} favorites={favorites} />
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* пример формы */}
      <Popup isOpen={isOpenPopup} onClickClose={handleClosePopup}>
        <EntryForm title="Войдите на сайт">
          <>
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
          </>
        </EntryForm>
      </Popup>
      <Footer onSubmit={() => {}} />
    </div>
  );
}

export default App;
