import React from "react";
import PropTypes from "prop-types";
// import infoImage from "../../images/success.svg";
// import errorImage from "../../images/error.svg";

import SuccessIcon from "../../images/info-popup/success";
import ErrorIcon from "../../images/info-popup/error";
import "./InfoPopup.scss";

const InfoPopup = ({ infoType, infoMessage }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {infoMessage && (
      <div
        className={`info-popup ${
          infoType === "info" ? "info-popup_info" : "info-popup_error"
        }`}
      >
        {infoType === "info" ? <SuccessIcon /> : <ErrorIcon />}
        <p className="info-popup__message">{infoMessage}</p>
      </div>
    )}
  </>
);

InfoPopup.propTypes = {
  infoType: PropTypes.oneOf(["info", "error"]),
  infoMessage: PropTypes.string,
};

InfoPopup.defaultProps = {
  infoType: "error",
  infoMessage: "",
};

export default InfoPopup;
