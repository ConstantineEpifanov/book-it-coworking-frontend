import React from "react";
import "./Discounts.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import img1 from "../../images/Discount_10.svg";
import img2 from "../../images/Discount_invite_friend.svg";
import img3 from "../../images/Discount_20.svg";

const data = [
  { id: 1, imageUrl: img1 },
  { id: 2, imageUrl: img2 },
  { id: 3, imageUrl: img3 },
];

export const Discounts = () => (
  <section className="discounts">
    <SectionTitle
      titleClass="section-title_margin-to-block"
      titleText="Акции"
    />
    <ul className="discounts__list">
      {data.map((item) => (
        <li key={item.id}>
          <img className="discounts__img" src={item.imageUrl} alt="" />
        </li>
      ))}
    </ul>
  </section>
);

// У третьей картинки надо как-то со слоями разобраться, чтобы круги все одинаковые были, а ноги вылезали за границу блока
