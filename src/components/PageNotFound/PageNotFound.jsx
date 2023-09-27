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
      <h4 className="not-found__title">Сожалеем, но здесь ничего нет</h4>
    </div>
    <Button
      btnClass="button_type_transparent button_size_medium"
      btnText="Перейти на главную"
      onClick={() => {}}
    />
  </section>
);
export default PageNotFound;
