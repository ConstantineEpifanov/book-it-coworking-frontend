import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { PointsItem } from "../PointsItem/PointsItem";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination]);

export const CoworkingSwiper = ({ isCompact, coworkingsArray }) => (
  <section className="coworking-swiper">
    <div className="coworking-swiper__list">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
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
        {coworkingsArray?.map((coworking) => (
          <SwiperSlide key={coworking.id}>
            <PointsItem isCompact={isCompact} data={coworking} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="swiper-pagination" />
  </section>
);
CoworkingSwiper.propTypes = {
  coworkingsArray: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
      name: PropTypes.string,
      short_annotation: PropTypes.string,
      description: PropTypes.string,
      days_open: PropTypes.string,
      open_time: PropTypes.string,
      close_time: PropTypes.string,
      low_price: PropTypes.number,
      main_photo: PropTypes.string,
      extra_photo: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          image: PropTypes.string,
        }),
      ),
      get_full_address_str: PropTypes.string,
      metro: PropTypes.string,
      count_workspace: PropTypes.number,
      count_meeting_room: PropTypes.number,
    }),
  ),
  isCompact: PropTypes.bool,
};

CoworkingSwiper.defaultProps = {
  coworkingsArray: undefined,
  isCompact: true,
};
