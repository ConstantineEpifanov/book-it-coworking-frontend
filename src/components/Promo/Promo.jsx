import React from "react";

import "./Promo.scss";
import { PromoItem } from "../PromoItem/PromoItem";

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

export const Promo = () => (
  <section className="promo">
    <ul className="promo__list">
      {data.map((item) => (
        <li>
          <PromoItem title={item.title} subtitle={item.subtitle} />
        </li>
      ))}
    </ul>
  </section>
);
