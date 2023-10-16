import {
  EQUIPMENT_GENERAL_CATEGORY,
  EQUIPMENT_MEETING_CATEGORY,
} from "../utils/constants";

const timeClickFunc = () => {};
const spotClickFunc = timeClickFunc;
const meetingRoomClickFunc = timeClickFunc;

export const timesButtonsList = [
  ...Array(15)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `${7 + index}:00 - ${8 + index}:00`,
      onClick: timeClickFunc,
      isEnabled: true,
    })),
];

export const spotsButtonsList = [
  ...Array(30)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `${1 + index}`,
      onClick: spotClickFunc,
      isEnabled: true,
    })),
];

export const meetingRoomsButtonsList = [
  ...Array(3)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: `${1 + index} Переговорная`,
      onClick: meetingRoomClickFunc,
      isEnabled: true,
    })),
];

// Data for Booking page spots

const FILLED_DAYS_COUNT = 3;

const getStringDateAfterDays = (date, days) => {
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days,
  );
  return `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`;
};

const todayDate = new Date();

// Items count should be equal to FILLED_DAYS_COUNT
const ORDERED_SPOTS = {
  [EQUIPMENT_GENERAL_CATEGORY]: {
    [getStringDateAfterDays(todayDate, 0)]: {
      5: { startTime: "09:00", endTime: "12:00" },
      7: { startTime: "11:00", endTime: "12:00" },
      11: { startTime: "14:00", endTime: "15:00" },
    },
    [getStringDateAfterDays(todayDate, 1)]: {
      4: { startTime: "09:00", endTime: "12:00" },
      8: { startTime: "07:00", endTime: "08:00" },
      9: { startTime: "16:00", endTime: "17:00" },
      23: { startTime: "18:00", endTime: "19:00" },
    },
    [getStringDateAfterDays(todayDate, 2)]: {
      5: { startTime: "09:00", endTime: "12:00" },
      8: { startTime: "10:00", endTime: "11:00" },
      10: { startTime: "10:00", endTime: "11:00" },
      14: { startTime: "09:00", endTime: "12:00" },
    },
  },
  [EQUIPMENT_MEETING_CATEGORY]: {
    [getStringDateAfterDays(todayDate, 0)]: {
      1: { startTime: "09:00", endTime: "12:00" },
    },
    [getStringDateAfterDays(todayDate, 1)]: {
      2: { startTime: "10:00", endTime: "11:00" },
    },
    [getStringDateAfterDays(todayDate, 2)]: {
      1: { startTime: "14:00", endTime: "15:00" },
      2: { startTime: "11:00", endTime: "12:00" },
    },
  },
};

const getSpots = (type, count) => [
  ...Array(count)
    .fill(null)
    .map((_, index) => ({
      id: index,
      name: (index + 1).toString(),
      price: 100,
      category: type,
      isOrdered: false,
    })),
];

const getSpotsForDays = (daysCount) => {
  let resultDays = {};
  for (let i = 0; i < daysCount; i += 1) {
    resultDays = {
      ...resultDays,
      [getStringDateAfterDays(todayDate, i)]: {
        [EQUIPMENT_GENERAL_CATEGORY]: getSpots(EQUIPMENT_GENERAL_CATEGORY, 30),
        [EQUIPMENT_MEETING_CATEGORY]: getSpots(EQUIPMENT_MEETING_CATEGORY, 3),
      },
    };
  }
  return resultDays;
};

export const locationData = {
  id: 1,
  open_time: "07:00",
  close_time: "22:00",
  days_open: "пн-сб",
  dates: getSpotsForDays(FILLED_DAYS_COUNT),
  getSpots(type, date, startTime, endTime) {
    const resultSpots = this.dates[date][type];
    const orderedSpots = ORDERED_SPOTS[type][date];
    const startHour = startTime.split(":")[0];
    const endHour = endTime.split(":")[0];
    return resultSpots.map((item) => {
      const orderedRange = orderedSpots[item.id];
      if (!orderedRange) {
        return item;
      }

      const orderedStartHour = orderedRange.startTime.split(":")[0];
      const orderedEndHour = orderedRange.endTime.split(":")[0];
      return {
        ...item,
        isOrdered:
          (startHour >= orderedStartHour && startHour < orderedEndHour) ||
          (endHour > orderedStartHour && endHour <= orderedEndHour),
      };
    });
  },
};
