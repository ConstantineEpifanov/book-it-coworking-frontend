import {
  DEFAULT_LATITUDE,
  DEFAULT_LONGITUDE,
  ORDER_STATUSES,
} from "./constants";

export function formatEventDate(date) {
  const dateComponents = date.split("-");
  const year = dateComponents[0].slice(2);
  const month = dateComponents[1];
  const day = dateComponents[2];
  return `${month}/${day}/${year}`;
}

export const generateCenterFromPoints = (points) => {
  if (points.length === 0) {
    return [DEFAULT_LATITUDE, DEFAULT_LONGITUDE];
  }

  const totalLat = points.reduce((sum, point) => sum + point.coordinates[0], 0);
  const totalLng = points.reduce((sum, point) => sum + point.coordinates[1], 0);
  const avgLat = totalLat / points.length;
  const avgLng = totalLng / points.length;

  return [avgLat, avgLng];
};

export const checkPath = (el, location) => el.includes(location.pathname);

export function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, "")
    .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 $2 $3 $4 $5");
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("ru-RU", options);
  const cleanedDate = formattedDate.replace(/ г\.$/, "");
  return cleanedDate;
}

export const getPopupText = (booking) => {
  if (booking.status === ORDER_STATUSES.PAID) {
    return `Бронирование уже оплачено.`;
  }
  if (booking.status === ORDER_STATUSES.WAIT_PAY || ORDER_STATUSES.NOT_PAID) {
    return `Бронирование еще находится в обработке.`;
  }
  return "Отменить бронирование";
};

export const getMaxDate = () => {
  const maxDate = new Date();
  return maxDate.toISOString().split("T")[0];
};
