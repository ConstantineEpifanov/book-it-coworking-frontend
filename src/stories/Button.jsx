import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  isValid,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const styleButtonPrimary = [
    "storybook-button",
    `storybook-button--${size}`,
    mode,
  ].join(" ");
  // стили для валидации кнопки
  const styleButtonValid = isValid ? "" : "storybook-button--disabled";

  return (
    <button
      type="button"
      className={`${styleButtonPrimary} ${styleButtonValid}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
      disabled={!isValid}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * =Boolean login props
   */
  isValid: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  label: "Продолжить",
  isValid: false,
};
