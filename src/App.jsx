/* eslint-disable camelcase */
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Contacts from "./components/Contacts/Contacts";
import { Main } from "./components/Main/Main";
import { CoworkingList } from "./components/CoworkingList/CoworkingList";
import { RulesQuestions } from "./components/RulesQuestions/RulesQuestions";
import { ProfileDashboard } from "./components/ProfileDashboard/ProfileDashboard";
import { Profile } from "./components/Profile/Profile";
import { exampleCoworkingsData } from "./config/exampleCoworkingsData";
import { exampleEventsData } from "./config/exampleEventsData";
import { user, favorites, bookings } from "./config/exampleProfileData";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RestorePassForm from "./components/Forms/RestorePassForm/RestorePassForm";

import * as apiData from "./utils/Api";
import usePopupOpen from "./hooks/usePopupOpen";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpenPopup, handleOpenPopup, handleClosePopup } = usePopupOpen();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const previousLocation = location.state?.previousLocation;

  //  ---------- AUTH FUNC ---------

  const handleRegister = ({
    email,
    password,
    first_name,
    last_name,
    re_password,
  }) => {
    console.log(
      { email, password, first_name, last_name, re_password },
      "register",
    );
    apiData
      .register({ email, password, first_name, last_name, re_password })
      .then((res) => {
        console.log(res, "registration");
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
      });
  };

  const handleAuthorization = ({ email, password }) => {
    console.log({ email, password });
    apiData
      .login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(
          `Что-то пошло не так: ошибка запроса ${err.status} , сообщение:${err.message} 😔`,
        );
      });
  };

  return (
    <div className="App">
      <Header onOpenPopup={handleOpenPopup} isLoggedIn={isLoggedIn} />
      <Routes location={previousLocation || location}>
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
        {/* для фонового заполнения и дальнейшего рероутинга попапов */}
        <Route
          path="/popup/*"
          element={
            <Main
              coworkingsArray={exampleCoworkingsData}
              eventsArray={exampleEventsData}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {previousLocation && (
        <Routes>
          <Route
            path="/popup/login"
            element={
              <LoginForm
                isOpenPopup={isOpenPopup}
                onClosePopup={handleClosePopup}
                onAuthorization={handleAuthorization}
              />
            }
          />
          <Route
            path="/popup/register"
            element={
              <RegisterForm
                isOpenPopup={isOpenPopup}
                onClosePopup={handleClosePopup}
                onRegistration={handleRegister}
              />
            }
          />
          <Route
            path="/popup/reset_password"
            element={
              <RestorePassForm
                isOpenPopup={isOpenPopup}
                onClosePopup={handleClosePopup}
              />
            }
          />
        </Routes>
      )}

      <Footer onSubmit={() => {}} />
    </div>
  );
}

export default App;
