import React from "react";
import PropTypes from "prop-types";
import "./FavoritesTab.scss";

import Button from "../UI-kit/Button/Button";

import TagIcon from "../../images/tag.svg";
import StarIcon from "../../images/star.svg";
import LikeIcon from "../../images/profile-icons/heart-filled.svg";

const FavoriteCard = ({ item }) => (
  <li className="favorites__card" key={item.id}>
    <img className="favorites__card-image" src={item.image} alt={item.name} />
    <div className="favorites__card-text-container">
      <div className="favorites__card-name-row">
        <span className="favorites__card-name">{item.name}</span>
        <img
          src={LikeIcon}
          className="favorites__card-like"
          alt="Убрать из Избранного"
        />
      </div>
      <div className="favorites__card-address-row">
        <img
          src={TagIcon}
          className="favorites__card-like"
          alt="Метка адреса"
        />
        <p className="favorites__card-address">{item.street}</p>
      </div>
      <div className="favorites__card-rating-row">
        <img
          src={StarIcon}
          className="favorites__card-like"
          alt="Иконка рейтинга"
        />
        <span className="favorites__card-rating">{item.rating}</span>
      </div>
      <Button btnText="Посмотреть" btnClass="button__profile-edit" />
    </div>
  </li>
);

export const FavoritesTab = ({ favorites }) => (
  <section className="favorites">
    <h2 className="favorites__title">Избранное</h2>
    <ul className="favorites__card-list">
      {favorites.map((item) => (
        <FavoriteCard item={item} />
      ))}
    </ul>
  </section>
);

FavoriteCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    street: PropTypes.string,
    image: PropTypes.string,
  }),
};

FavoriteCard.defaultProps = {
  item: PropTypes.shape({}),
};

FavoritesTab.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.number,
      street: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};

FavoritesTab.defaultProps = {
  favorites: [],
};
