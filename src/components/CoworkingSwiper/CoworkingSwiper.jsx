import React from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { SWIPER_BREAKPOINTS } from "../../utils/constants";

import { PointsItem } from "../PointsItem/PointsItem";

import "swiper/swiper-bundle.min.css";

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
        breakpoints={SWIPER_BREAKPOINTS}
      >
        {coworkingsArray?.map((coworking) => (
          <SwiperSlide key={coworking.id}>
            <PointsItem isCompact={isCompact} data={coworking} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </div>
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
