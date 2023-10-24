import React from "react";

import { useNavigate } from "react-router-dom";
import img from "../../images/Promo.svg";
import "./Promo.scss";
import { PromoItem } from "../PromoItem/PromoItem";
import Input from "../UI-kit/Input/Input";
import Button from "../UI-kit/Button/Button";
import { searchLocations } from "../../utils/Api";
import useForm from "../../hooks/useForm";
import usePagination from "../../hooks/usePagination";

const data = [
  {
    id: 1,
    title: "01",
    subtitle: `Уникальные локации и\u00A0комфортная обстановка`,
  },
  {
    id: 2,
    title: "02",
    subtitle: "Разнообразие дополнительных услуг",
  },
  {
    id: 3,
    title: "03",
    subtitle: "Гибкие тарифы и\u00A0индивидуальный подход",
  },
];

export const Promo = () => {
  const lastSearchRequest = sessionStorage.getItem("lastSearchRequest") || "";
  const { form, handleChange } = useForm({
    search: lastSearchRequest,
  });

  const { offset, limit } = usePagination();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.search === "" || !form.search) {
      const coworkingsArrayFromPromo = [];
      navigate("/points", { state: { coworkingsArrayFromPromo } });
    }
    sessionStorage.setItem("lastSearchRequest", form.search);
    searchLocations({
      search: form.search,
      offset,
      limit,
    })
      .then((coworkingsFromPromo) => {
        navigate("/points", { state: { coworkingsFromPromo } });
      })
      .catch((error) => {
        console.error(error);
      });
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
              // inputValue=""
              inputValue={form.search}
              // onChangeInput={onChangeInput}
              handleChange={handleChange}
              // onFocusInput={handleFocus}
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
          <li key={item.id}>
            <PromoItem title={item.title} subtitle={item.subtitle} />
          </li>
        ))}
      </ul>
    </section>
  );
};
