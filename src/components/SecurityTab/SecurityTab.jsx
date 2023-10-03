import "./SecurityTab.scss";
import PropTypes from "prop-types";
import Button from "../UI-kit/Button/Button";

export const SecurityTab = ({ user }) => {
  function hidePassword(password) {
    const maxLength = 20;
    return "*".repeat(Math.min(maxLength, password.length));
  }
  return (
    <section className="security">
      <h2 className="security__title">Безопасность и конфиденциальность</h2>

      <ul className="security__board">
        <li className="security__board-row">
          <div className="security__password-container">
            <span className="security__feature-name">Пароль</span>
            <span>{hidePassword(user.password)}</span>
          </div>
          <Button btnText="Сбросить" btnClass="button__profile-edit" />
        </li>
        <li className="security__board-row">
          <div>
            <span className="security__feature-name">Активные сессии</span>
            <p className="security__feature-description">
              Нажмите “Выйти”, и в течение 10 минут вы выйдете из аккаунта на
              всех устройствах, кроме этого
            </p>
          </div>
          <Button btnText="Изменить" btnClass="button__profile-edit" />
        </li>
        <li className="security__board-row">
          <div>
            <span className="security__feature-name">Выйти из аккаунта</span>
            <p className="security__feature-description">Завершить сеанс</p>
          </div>
          <Button btnText="Выйти" btnClass="button__profile-edit" />
        </li>
      </ul>
    </section>
  );
};

SecurityTab.propTypes = {
  user: PropTypes.shape({
    password: PropTypes.string,
    sessions: PropTypes.arrayOf(PropTypes.string),
  }),
};

SecurityTab.defaultProps = {
  user: {
    password: "",
    sessions: [],
  },
};
