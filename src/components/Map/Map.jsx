import React from "react";
import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import PropTypes from "prop-types";
import "./Map.scss";
import MapIcon from "../../images/map.png";
import spotImage from "../../images/dummy-spot.jpg";
import Star from "../../images/star.svg";
import Tag from "../../images/tag.svg";

export const MainMap = ({ points, defaultState }) => (
  <YMaps>
    <div className="map">
      <YandexMap
        width="100%"
        height="741px"
        defaultState={defaultState}
        modules={[
          "control.ZoomControl",
          "control.FullscreenControl",
          "geoObject.addon.balloon",
          "geoObject.addon.hint",
        ]}
      >
        {points.map((point) => (
          <Placemark
            key={point.id}
            defaultGeometry={point.coordinates}
            properties={{
              balloonContentHeader: `<img src="${point.image}" class="map__image" height="150" width="200">`,
              balloonContentBody: `
              <div class='map__body-wrapper'>
              <div class ="map__row">
              <a href = "${point.link}" class="map__name">${point.name}</a><div class="map__rating-container"><span class="map__rating">${point.rating}</span><img src="${Star}" class="map__icon" alt="Рейтинг" /></div></div>
              <div class ="map__address-container"><img src="${Tag}" alt="Тег" /><span class="map__address">${point.address}</span></div><a href = "${point.link}" class="map__button">Подробнее</a>
              </div> `,

              balloonContentFooter: "",
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: MapIcon,
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
            }}
          />
        ))}
      </YandexMap>
    </div>
  </YMaps>
);

MainMap.propTypes = {
  points: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      rating: PropTypes.float,
      name: PropTypes.string,
      link: PropTypes.string,
      image: PropTypes.string,
      address: PropTypes.string,
    }),
  ),
  defaultState: PropTypes.shape({
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
    controls: PropTypes.arrayOf(PropTypes.string),
  }),
};

MainMap.defaultProps = {
  points: [
    {
      coordinates: [59.89, 30.29],
      id: 1,
      rating: 4.8,
      name: "Московский",
      link: "/",
      image: spotImage,
      address: "г. Санкт-Петербург, Кантемировская улица, 22",
    },
    {
      coordinates: [59.91, 30.31],
      id: 2,
      rating: 4.9,
      name: "Питерский",
      link: "/",
      image: spotImage,
      address: "г. Санкт-Петербург, Невская 1",
    },
  ],
  defaultState: {
    center: [59.9, 30.3],
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
  },
};
