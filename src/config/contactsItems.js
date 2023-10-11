import imgEmail from "../images/email-icons.svg";
import imgPhone from "../images/phone-icons.svg";
import imgQuestion from "../images/question-icons.svg";

export const MAIN_EMAIL = "info@spotit.com";
export const MAIN_PHONE_NUMBER = "+7(800)-130-00-00";

export const INSTAGRAM_LINK = "https://instagram.com/spotit";
export const YOUTUBE_LINK = "https://youtube.com/spotit";
export const TWITTER_LINK = "https://twitter.com/spotit";
export const TELEGRAM_LINK = "https://t.me/spotit";

export const contactsItems = [
  {
    id: 1,
    info: "По вопросам информационного взаимодействия",
    header: "press@spotit.com",
    img: imgEmail,
  },
  {
    id: 2,
    info: "Для остальных вопросов и предложени",
    header: MAIN_EMAIL,
    img: imgQuestion,
  },
  {
    id: 3,
    info: "Телефон для поддержки и обратной связи ",
    header: MAIN_PHONE_NUMBER,
    img: imgPhone,
  },
];
