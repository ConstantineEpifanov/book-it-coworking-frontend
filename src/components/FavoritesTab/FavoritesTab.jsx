import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./FavoritesTab.scss";

import Button from "../UI-kit/Button/Button";
import { LikeIcon } from "../../images/profile-icons/LikeIcon";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import TagIcon from "../../images/tag.svg";
import StarIcon from "../../images/star.svg";
import { getFavorites, deleteFavorite } from "../../utils/Api";

const FavoriteCard = ({ item, onFavoriteDeleted }) => {
  function handleDeleteFavorite() {
    deleteFavorite(item.id)
      .then(() => {
        onFavoriteDeleted(item.id);
      })
      .catch(() => {});
  }

  return (
    <li className="favorites__card">
      <div className="favorites__card-image-container">
        <img
          className="favorites__card-image"
          src={item.main_photo}
          alt={item.name}
        />
        <button
          className="favorites__card-button"
          title="Убрать из Избранного"
          onClick={handleDeleteFavorite}
        >
          <LikeIcon />
        </button>
      </div>
      <div className="favorites__card-text-container">
        <div className="favorites__card-name-row">
          <span className="favorites__card-name">{item.name}</span>
        </div>
        <div className="favorites__card-rating-row">
          <img
            src={StarIcon}
            className="favorites__card-like"
            alt="Иконка рейтинга"
          />
          <span className="favorites__card-rating">{item.rating}</span>
        </div>
        <div className="favorites__card-address-row">
          <img
            src={TagIcon}
            className="favorites__card-like"
            alt="Метка адреса"
          />
          <p className="favorites__card-address">{item.get_full_address_str}</p>
        </div>
        <Link to={`/points/${item.id}`} target="_blank">
          <Button btnText="Посмотреть" btnClass="button__profile-edit" />
        </Link>
      </div>
    </li>
  );
};

export const FavoritesTab = () => {
  const [favoritesArray, setFavoritesArray] = useState([]);

  const handleFavoriteDeleted = (deletedId) => {
    setFavoritesArray((prev) => prev.filter((item) => item.id !== deletedId));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getFavorites()
      .then((res) => setFavoritesArray(res))
      .catch(() => {})
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="favorites">
      <SectionTitle titleText="Избранное" titleClass="section-title_profile" />

      {favoritesArray.length !== 0 ? (
        <ul className="favorites__card-list">
          {favoritesArray.map((item) => (
            <FavoriteCard
              item={item}
              key={item.id}
              onFavoriteDeleted={handleFavoriteDeleted}
            />
          ))}
        </ul>
      ) : (
        <span className="favorites__nodata">Пока ничего не добавлено</span>
      )}
    </section>
  );
};

FavoriteCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    get_full_address_str: PropTypes.string,
    main_photo: PropTypes.string,
  }),
  onFavoriteDeleted: PropTypes.func,
};

FavoriteCard.defaultProps = {
  item: PropTypes.shape({}),
  onFavoriteDeleted: () => {},
};

// FavoritesTab.propTypes = {
//   favorites: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       rating: PropTypes.number,
//       street: PropTypes.string,
//       image: PropTypes.string,
//     }),
//   ),
// };

// FavoritesTab.defaultProps = {
//   favorites: [],
// };
