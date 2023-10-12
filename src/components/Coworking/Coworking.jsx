/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PointsItem } from "../PointsItem/PointsItem";
import { EquipmentList } from "../EquipmentList/EquipmentList";
import { ReviewList } from "../ReviewList/ReviewList";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Loader } from "../Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./Coworking.scss";

import { getCoworkingInfo, getEquipment, getReviews } from "../../utils/Api";

export const Coworking = () => {
  const [coworking, setCoworking] = useState({});
  const [equipment, setEquipment] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isPresent, setPresent] = useState(true);

  const location = useLocation();
  const pathId = parseInt(location.pathname.match(/\d+/), 10);

  useEffect(() => {
    getCoworkingInfo(pathId)
      .then((res) => {
        setCoworking(res);
      })
      .catch(() => {
        setPresent(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getEquipment(pathId)
      .then((res) => {
        setEquipment(res);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    getReviews(pathId)
      .then((res) => {
        setReviews(res);
      })
      .catch(() => {});
  }, []);

  return isLoading ? (
    <Loader />
  ) : !isPresent ? (
    <PageNotFound />
  ) : (
    <main className="coworking" aria-label="страница коворкинга">
      <SectionTitle
        titleText={coworking.name}
        titleClass="section-title_own-page"
      />
      <h2 className="coworking__subtitle">{coworking.short_annotation} </h2>
      <PointsItem data={coworking} />
      <section className="coworking__section">
        <h3 className="coworking__section-title">Описание</h3>
        <p className="coworking__section-text">{coworking.description}</p>
      </section>
      <section className="coworking__section">
        <h3 className="coworking__section-title">Удобства в этом коворкинге</h3>
        <EquipmentList equipment={equipment} />
      </section>
      <section className="coworking__section">
        <h3 className="coworking__section-title">Отзывы</h3>
        <ReviewList reviews={reviews} pointRating={coworking.rating} />
      </section>
    </main>
  );
};
