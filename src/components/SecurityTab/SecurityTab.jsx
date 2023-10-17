import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./SecurityTab.scss";
// import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";

export const SecurityTab = () => {
  const { currentUser, setIsLoggedIn, setСurrentUser } =
    useContext(CurrentUserContext);

  const navigate = useNavigate();

  function hidePassword(password) {
    const maxLength = 15;
    return "*".repeat(
      password?.length ? Math.min(maxLength, password?.length) : maxLength,
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setСurrentUser({});
    localStorage.clear();
    navigate("/");
  };

  return (
    <section className="security">
      <h2 className="security__title">Безопасность и конфиденциальность</h2>

      <ul className="security__board">
        <li className="security__board-row">
          <div className="security__password-container">
            <span className="security__feature-name">Пароль</span>
            <span>{hidePassword(currentUser.password)}</span>
          </div>
          <Button
            btnText="Сбросить"
            btnClass="button__profile-edit"
            isValidBtn={false}
          />
        </li>
        <li className="security__board-row">
          <div>
            <span className="security__feature-name">Активные сессии</span>
            <p className="security__feature-description">
              Нажмите “Выйти”, и в течение 10 минут вы выйдете из аккаунта на
              всех устройствах, кроме этого
            </p>
          </div>
          <Button
            btnText="Изменить"
            btnClass="button__profile-edit"
            isValidBtn={false}
          />
        </li>
        <li className="security__board-row">
          <div>
            <span className="security__feature-name">Выйти из аккаунта</span>
            <p className="security__feature-description">Завершить сеанс</p>
          </div>
          <Button
            btnText="Выйти"
            btnClass="button__profile-edit"
            onClick={handleLogout}
          />
        </li>
      </ul>
    </section>
  );
};

// SecurityTab.propTypes = {
//   user: PropTypes.shape({
//     password: PropTypes.string,
//     sessions: PropTypes.arrayOf(PropTypes.string),
//   }),
// };

// SecurityTab.defaultProps = {
//   user: {
//     password: "",
//     sessions: [],
//   },
// };
