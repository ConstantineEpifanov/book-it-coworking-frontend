import React from "react";
import "./Discounts.scss";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import img1 from "../../images/Discount_10.svg";
import img2 from "../../images/Discount_20.svg";
import img3 from "../../images/Discount_invite_friend.svg";

const data = [img1, img2, img3];

export const Discounts = () => (
  <section className="discounts">
    <SectionTitle
      titleClass="section-title_margin-to-block"
      titleText="Акции"
    />
    <ul className="discounts__list">
      {data.map((item) => (
        <li>
          <img className="discounts__img" src={item} alt="" />
        </li>
      ))}
    </ul>
  </section>
);

// У третьей картинки надо как-то со слоями разобраться, чтобы круги все одинаковые были, а ноги вылезали за границу блока
