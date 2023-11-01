import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = React.useState(0);

  const handleStarClick = React.useCallback(
    (star) => {
      onRatingChange(star);
    },
    [onRatingChange],
  );

  const handleStarHover = (star) => {
    setHoverRating(star);
  };

  const renderStars = React.useMemo(() => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i += 1) {
      stars.push(
        <button
          key={i}
          className={`button button_type_review ${
            i <= (hoverRating || rating) ? "filled" : ""
          }`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={i <= (hoverRating || rating) ? "#B0FF1A" : "none"} // Изменяем fill в зависимости от состояния
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke={i <= (hoverRating || rating) ? "#122023" : "#122023"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>,
      );
    }

    return stars;
  }, [rating, hoverRating, handleStarClick]);

  return <div>{renderStars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number,
  onRatingChange: PropTypes.func,
};

StarRating.defaultProps = {
  rating: 0,
  onRatingChange: () => {},
};

export default React.memo(StarRating);
