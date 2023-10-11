import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { EventsItem } from "../EventsItem/EventsItem";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Events.scss";

SwiperCore.use([Pagination]);

export const Events = ({ eventsArray }) => (
  <section className="events">
    <SectionTitle
      titleClass="section-title_margin-to-subtitle"
      titleText="Мероприятия"
    />
    <p className="events__subheader">
      Здесь собраны все анонсы о предстоящих мероприятиях
      на&nbsp;базе&nbsp;наших коворкингов
    </p>

    <div className="events__list">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1060: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {eventsArray.map((event) => (
          <SwiperSlide key={event.id}>
            <EventsItem event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="swiper-pagination" />
  </section>
);

Events.propTypes = {
  eventsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      address: PropTypes.string,
      meetingQuantity: PropTypes.number,
      url: PropTypes.string,
      date: PropTypes.string.isRequired,
    }),
  ),
};

Events.defaultProps = {
  eventsArray: [
    {
      id: undefined,
      name: undefined,
      image: undefined,
      address: undefined,
      meetingQuantity: undefined,
      url: undefined,
      date: undefined,
    },
  ],
};
