import React from "react";

import img from "../../images/Promo.svg";
import "./Promo.scss";
import { PromoItem } from "../PromoItem/PromoItem";
import Input from "../UI-kit/Input/Input";
import Button from "../UI-kit/Button/Button";

const data = [
  {
    title: "01",
    subtitle: "Уникальные локации и комфортная обстановка",
  },
  {
    title: "02",
    subtitle: "Разнообразие дополнительных услуг",
  },
  {
    title: "03",
    subtitle: "Гибкие тарифы и индивидуальный подход",
  },
];

export const Promo = () => {
  const onChangeInput = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__text">
          <h1 className="promo__title">Spot It</h1>
          <h2 className="promo__subtitle">
            Сеть коворкингов созданная специально для IT специалистов
          </h2>
          <form className="promo__search" onSubmit={handleSubmit} noValidate>
            <Input
              inputClass="input__promo"
              inputType="text"
              inputName="search"
              inputPlaceholder="Найти рабочее место..."
              inputValue=""
              onChangeInput={onChangeInput}
            />
            <Button
              btnClass="button__promo"
              btnType="submit"
              btnText="Искать"
              isValidBtn
              backgroundColor="#b0ff1a"
            />
          </form>
        </div>
        <img className="promo__img" src={img} alt="Промо" />
      </div>

      <ul className="promo__list">
        {data.map((item) => (
          <li>
            <PromoItem title={item.title} subtitle={item.subtitle} />
          </li>
        ))}
      </ul>
    </section>
  );
};
