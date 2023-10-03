import React from "react";
import PropTypes from "prop-types";
import "./Loader.scss";

export const Loader = ({ animationDelay = 1, itemColor = "#b0ff1a" }) => {
  const delaysList = [
    -0.9166666666666666, -0.8333333333333334, -0.75, -0.6666666666666666,
    -0.5833333333333334, -0.5, -0.4166666666666667, -0.3333333333333333, -0.25,
    -0.16666666666666666, -0.08333333333333333, 0,
  ];

  return (
    <div className="loader">
      <div className="loader__view">
        {delaysList.map((delay, index) => {
          const key = `loader-item${index}`;
          return (
            <div
              key={key}
              style={{
                animationDelay: `${animationDelay * delay}s`,
                animationDuration: `${animationDelay}s`,
                backgroundColor: itemColor,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

Loader.propTypes = {
  animationDelay: PropTypes.number,
  itemColor: PropTypes.string,
};

Loader.defaultProps = {
  animationDelay: 1,
  itemColor: "#b0ff1a",
};
