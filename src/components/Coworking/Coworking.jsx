/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PointsItem } from "../PointsItem/PointsItem";
import { EquipmentList } from "../EquipmentList/EquipmentList";
import { ReviewList } from "../ReviewList/ReviewList";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Loader } from "../Loader/Loader";
import Button from "../UI-kit/Button/Button";
import PageNotFound from "../PageNotFound/PageNotFound";

import "./Coworking.scss";

import { getCoworkingInfo, getEquipment, getReviews } from "../../utils/Api";
import {
  EQUIPMENT_GENERAL_CATEGORY,
  EQUIPMENT_MEETING_CATEGORY,
} from "../../utils/constants";

export const Coworking = () => {
  const [coworking, setCoworking] = useState({});
  const [equipmentMeeting, setEquipmentMeeting] = useState([]);
  const [equipmentGeneral, setEquipmentGeneral] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isPresent, setPresent] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
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
    getEquipment(pathId, EQUIPMENT_GENERAL_CATEGORY)
      .then((res) => {
        setEquipmentGeneral(res);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    getEquipment(pathId, EQUIPMENT_MEETING_CATEGORY)
      .then((res) => {
        setEquipmentMeeting(res);
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

  const handleBackButton = () => {
    navigate("/points/", { replace: false });
  };

  return isLoading ? (
    <Loader />
  ) : !isPresent ? (
    <PageNotFound />
  ) : (
    <main className="coworking" aria-label="страница коворкинга">
      <Button
        onClick={handleBackButton}
        btnClass="button_type_back"
        btnText="Назад"
      />
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
        <EquipmentList
          equipmentMeeting={equipmentMeeting}
          equipmentGeneral={equipmentGeneral}
        />
      </section>
      <section className="coworking__section">
        <h3 className="coworking__section-title">Отзывы</h3>
        <ReviewList reviews={reviews} pointRating={coworking.rating} />
      </section>
    </main>
  );
};
