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

export const locationData = {
  id: 1,
  open_time: "07:00",
  close_time: "22:00",
  days_open: "пн-сб",
  spots: {
    [EQUIPMENT_GENERAL_CATEGORY]: [
      ...Array(30)
        .fill(null)
        .map((_, index) => ({
          id: index,
          name: (index + 1).toString(),
          price: 100,
          category: EQUIPMENT_GENERAL_CATEGORY,
          isEnabled: index === 5 || index === 11 || index === 16,
        })),
    ],
    [EQUIPMENT_MEETING_CATEGORY]: [
      ...Array(3)
        .fill(null)
        .map((_, index) => ({
          id: index,
          name: (index + 1).toString(),
          price: 100,
          category: EQUIPMENT_MEETING_CATEGORY,
          isEnabled: index === 1,
        })),
    ],
  },
};
