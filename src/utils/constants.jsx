export const SCREEN_MEDIUM = 1270;
export const SCREEN_MEDIUM_TABLET = 1025;
export const SCREEN_SMALL = 770;
export const SCREEN_SMALL_MOBILE = 429;

// количество карточек на главной странице в начальном рендере и сколько добавляем от кнопки еще
export const LAPTOP_SHORT_POINTS_QUANTITY = 6;
export const TABLET_SHORT_POINTS_QUANTITY = 4;
export const MOBILE_SHORT_POINTS_QUANTITY = 3;

export const LAPTOP_MORE_SHORT_POINTS_QUANTITY = 3;
export const TABLET_MORE_SHORT_POINTS_QUANTITY = 2;
export const MOBILE_MORE_SHORT_POINTS_QUANTITY = 2;

// это на странице коворкингов
export const LAPTOP_POINTS_QUANTITY = 4;
export const TABLET_POINTS_QUANTITY = 3;
export const MOBILE_POINTS_QUANTITY = 3;

export const LAPTOP_MORE_POINTS_QUANTITY = 2;
export const TABLET_MORE_POINTS_QUANTITY = 2;
export const MOBILE_MORE_POINTS_QUANTITY = 2;

// кол-во отзывов для рендера
export const LAPTOP_REVIEWS_QUANTITY = 4;

// для фильтра оборудования на сервере и вывода на страницу коворкинга
export const EQUIPMENT_GENERAL_CATEGORY = "Рабочее место";
export const EQUIPMENT_MEETING_CATEGORY = "Переговорная";

// MAP OPTIONS

export const DEFAULT_LATITUDE = 59.9;
export const DEFAULT_LONGITUDE = 30.3;
export const DEFAULT_ZOOM = 11;

// название города

export const CITY_NAME = "г. Санкт-Петербург";

// Booking
// Количество рабочих дней для локации
export const WORKING_DAYS_COUNTS = {
  "пн-вс": 7,
  "пн-сб": 6,
  "пн-пт": 5,
};

// Количество доступных дней в календаре для бронирования
export const CALENDAR_MAX_ALLOWED_DAYS = 60;

// Доступные промежутки времени для бронирования
export const ALLOWED_TIME_RANGES = [{ startTime: "00:00", endTime: "24:00" }];

export const routesPopup = [
  "/popup/login",
  "/popup/register",
  "/popup/reset_password",
];

// Статусы заказов
export const ORDER_STATUSES = {
  WAIT_PAY: "Ожидается оплата",
  PAID: "Оплачено",
  FINISH: "Завершен",
  CANCEL: "Отменен",
  NOT_PAID: "Не оплачено",
};

// Количество символов в отзыве

export const MAX_REVIEW_CHARACTERS_NUMBER = 300;

// Сообщения

export const PROFILE_DATA_UPDATE = "Данные успешно обновлены";
export const NOT_FOUND_ERROR_TITLE = "Этого мы не нашли";
export const NOT_FOUND_ERROR_SUBTITLE =
  "Попробуйте изменить параметры поиска и повторите попытку";
export const SUCCESSFUL_LIKE = "Добавлено в избранное";
export const SUCCESSFUL_DISLIKE = "Удалено из избранного";
export const BASIC_ERROR = "Что-то пошло не так...";
export const REVIEW_SUCCESS = "Отзыв успешно отправлен";
export const SUBSRIPTION_SUCCESS = "Вы успешно подписались";
export const SUBSCRIPTION_ERROR = "Нужно войти, чтобы подписаться";
export const IMAGE_VALIDATION_ERROR = "Не более 1 Мб, JPG или PNG";
export const AVATAR_UPLOAD_SUCCESS = "Изображение успешно обновлено";
export const SUCCESSFUL_LOGOUT = "Вы успешно вышли";
export const LOGOUT_OTHER_DEVICES = "Вы успешно вышли на других устройствах";
export const SUCCESSFUL_ACCOUNT_DELETE = "Аккаунт успешно удален";

// меню в профиле

export const profileMenuItems = [
  { id: "data", text: "Персональные данные" },
  {
    id: "security",
    text: "Безопасность и конфиденциальность",
  },
  { id: "bookings", text: "Бронирования" },
  { id: "favorites", text: "Избранное" },
];

// классы навигации в header
export const activeLinkClass = "navigation__link navigation__link_active";
export const headerActiveLinkClass =
  "header__profile_nav header__profile_nav_active";

// Новые константы для Swiper breakpoints
export const SWIPER_BREAKPOINTS = {
  [SCREEN_SMALL_MOBILE]: {
    slidesPerView: 1.2,
  },
  [SCREEN_SMALL]: {
    slidesPerView: 1.7,
  },
  [SCREEN_MEDIUM_TABLET]: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  [SCREEN_MEDIUM]: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};
