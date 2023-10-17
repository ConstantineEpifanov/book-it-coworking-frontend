/* eslint-disable no-unused-vars */
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

function generateLinks(links) {
  return links.map((link) => (
    <a
      key={link.id}
      href={link.url}
      className={`footer__icon ${link.isFill ? "footer__icon_type_fill" : ""}`}
      target="_blank"
      rel="noreferrer"
    >
      {link.icon}
    </a>
  ));
}

const linksData = [
  { id: 1, url: INSTAGRAM_LINK, icon: <InstagramIcon />, isFill: false },
  { id: 2, url: TWITTER_LINK, icon: <TwitterIcon />, isFill: false },
  { id: 3, url: YOUTUBE_LINK, icon: <YoutubeIcon />, isFill: false },
  { id: 4, url: TELEGRAM_LINK, icon: <TelegramIcon />, isFill: true },
];

export const Footer = ({ onSubmit }) => {
  const links = generateLinks(linksData);
  return (
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
            <div className="footer__icons">{links}</div>
          </div>
        </div>
        <div className="footer__icons_mobile">{links}</div>
        <div className="footer__subscription">
          <SubscriptionForm onSubmit={onSubmit} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  onSubmit: PropTypes.func,
};

Footer.defaultProps = {
  onSubmit: () => {},
};
