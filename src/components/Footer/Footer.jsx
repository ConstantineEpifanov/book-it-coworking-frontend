/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import "./Footer.scss";
import { Logo } from "../UI-kit/Logo/Logo";

import YoutubeIcon from "../../images/social-icons/YoutubeIcon";
import InstagramIcon from "../../images/social-icons/InstagramIcon";
import TwitterIcon from "../../images/social-icons/TwitterIcon";
import TelegramIcon from "../../images/social-icons/TelegramIcon";

import { SubscriptionForm } from "../Forms/SubscriptionForm/SubscriptionForm";
import { SUBSRIPTION_SUCCESS } from "../../utils/constants";

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

export const Footer = () => {
  const { currentUser, showMessage, setСurrentUser } =
    useContext(CurrentUserContext);
  const links = generateLinks(linksData);

  const handleSubmit = () => {
    showMessage(SUBSRIPTION_SUCCESS, "info");
    const updatedUser = { ...currentUser, subscribed: true };
    setСurrentUser(updatedUser);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__column">
            <Link to="/">
              <Logo
                width="102px"
                height="20px"
                className="logo_type_footer logo_type_responsive"
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
          <SubscriptionForm onSubmit={handleSubmit} />
        </div>
      </div>
    </footer>
  );
};
