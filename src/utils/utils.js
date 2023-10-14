import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "./constants";

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
