import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";
import { Logo } from "../UI-kit/Logo/Logo";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import TelegramIcon from "./icons/TelegramIcon";
import { SubscriptionForm } from "../Forms/SubscriptionForm/SubscriptionForm";

export const Footer = ({ onSubmit }) => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__info">
        <div className="footer__column">
          <Logo mode="green" width="70px" height="22px" />
          <a href="/" className="footer__link">
            Политика конфиденциальности
          </a>
        </div>
        <div className="footer__column">
          <a href="tel:+70000000000" className="footer__contacts">
            +7(000)-00–00–00
          </a>
          <a href="mailto:info@itcoworking.com" className="footer__contacts">
            info@itcoworking.com
          </a>
          <div className="footer__icons">
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <TelegramIcon />
          </div>
        </div>
      </div>
      <SubscriptionForm onSubmit={onSubmit} />
    </div>
  </footer>
);

Footer.propTypes = {
  onSubmit: PropTypes.func,
};

Footer.defaultProps = {
  onSubmit: () => {},
};
