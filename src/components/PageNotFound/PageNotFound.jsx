import { Link } from "react-router-dom";
import "./PageNotFound.scss";
import logo404 from "../../images/404-Error.svg";
import Button from "../UI-kit/Button/Button";

const PageNotFound = () => (
  <section className="not-found" aria-label="страница не найдена">
    <div className="not-found__inner">
      <img
        alt="страница по данному адресу не найдена - ошибка 404"
        src={logo404}
        className="not-found__image"
      />
      <h4 className="not-found__title">Страница не найдена</h4>
      <p className="not-found__info">
        В адресе есть ошибка или страница удалена{" "}
      </p>
    </div>
    <Link to="/">
      <Button
        btnClass="button button_type_transparent button_type_not-found"
        btnText="Перейти на главную"
        onClick={() => {}}
      />
    </Link>
  </section>
);
export default PageNotFound;
