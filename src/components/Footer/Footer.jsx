import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.scss";
import { Logo } from "../UI-kit/Logo/Logo";

import YoutubeIcon from "../../images/social-icons/YoutubeIcon";
import InstagramIcon from "../../images/social-icons/InstagramIcon";
import TwitterIcon from "../../images/social-icons/TwitterIcon";
import TelegramIcon from "../../images/social-icons/TelegramIcon";

import { SubscriptionForm } from "../Forms/SubscriptionForm/SubscriptionForm";

import {
  MAIN_EMAIL,
  MAIN_PHONE_NUMBER,
  INSTAGRAM_LINK,
  YOUTUBE_LINK,
  TWITTER_LINK,
  TELEGRAM_LINK,
} from "../../config/contactsItems";

export const Footer = ({ onSubmit }) => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__info">
        <div className="footer__column">
          <Link to="/">
            <Logo
              mode="green"
              width="70px"
              height="22px"
              className="logo_type_responsive"
            />
          </Link>
          <a href="/" className="footer__link">
            Политика конфиденциальности
          </a>
        </div>
        <div className="footer__column">
          <a href={`tel:${MAIN_PHONE_NUMBER}`} className="footer__contacts">
            {MAIN_PHONE_NUMBER}
          </a>
          <a href={`mailto:${MAIN_EMAIL}`} className="footer__contacts">
            {MAIN_EMAIL}
          </a>
          <div className="footer__icons">
            <a
              href={INSTAGRAM_LINK}
              className="footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={TWITTER_LINK}
              className="footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href={YOUTUBE_LINK}
              className="footer__icon"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              href={TELEGRAM_LINK}
              className="footer__icon footer__icon_type_fill"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__subscription">
        <SubscriptionForm onSubmit={onSubmit} />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  onSubmit: PropTypes.func,
};

Footer.defaultProps = {
  onSubmit: () => {},
};
