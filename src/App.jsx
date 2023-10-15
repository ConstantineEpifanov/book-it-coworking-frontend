/* eslint-disable camelcase */
import React from "react";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "./contexts/currentUserContext";

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
// import { exampleCoworkingsData } from "./config/exampleCoworkingsData";
// import { exampleEventsData } from "./config/exampleEventsData";
import { user, favorites, bookings } from "./config/exampleProfileData";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RestorePassForm from "./components/Forms/RestorePassForm/RestorePassForm";
import { Coworking } from "./components/Coworking/Coworking";

import usePopupOpen from "./hooks/usePopupOpen";
import { getUserInfo, setHeaders,login } from "./utils/Api";


function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isOpenPopup, handleOpenPopup, handleClosePopup } = usePopupOpen();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const previousLocation = location.state?.previousLocation;
  
  const handleGetUserInfo = async () => {
    try {
      const data = await getUserInfo();
      handleOpenPopup()
      setUserData(data);
    } catch (err) {
      console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
    }
  };

  //  ---------- AUTH FUNC ---------
  // проверка токена
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const headers = setHeaders();
        navigate(location.pathname);
        if (headers.Authorization) {
          setIsLoggedIn(true);
          handleGetUserInfo();
          navigate(location.pathname);
        }
      } catch (err) {
        setIsLoggedIn(false);
        console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuthorization = async ({ email, password }) => {
    try {
      const data = await login({ email, password });
      localStorage.setItem("token", data.auth_token);

      if (localStorage.getItem("token")) {
        handleGetUserInfo();
      }
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      console.log(`Что-то пошло не так: ошибка запроса ${err.message} 😔`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setUserData({});
    // для очистки локального хранилища после выхода из приложения
    localStorage.clear();
  };

  const contextValue = React.useMemo(
    () => ({ isLoading, setIsLoading, isLoggedIn, setIsLoggedIn,userData }),
    [isLoading, setIsLoading, isLoggedIn, setIsLoggedIn,userData]
  );

  return (
    <CurrentUserContext.Provider value={contextValue }>
      <div className="App">
        <Header
          profileInfo={userData}
          onOpenPopup={handleOpenPopup}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <Routes location={previousLocation || location}>
          <Route path="/" element={<Main />} />
          <Route path="/points" element={<CoworkingList />} />
          <Route path="/faq" element={<RulesQuestions />} />
          <Route path="/profile" exact element={<ProfileDashboard />} />
          <Route
            path="/profile/*"
            exact
            state={null}
            element={
              <Profile user={user} bookings={bookings} favorites={favorites} />
            }
          />
         
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/points/:id" element={<Coworking />} />
          <Route path="*" element={<PageNotFound />} />
{/* для рероутинга попапов, чтобы при переключении не бил в 404 */}
          <Route path="/popup/*" element={<Main />} />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
