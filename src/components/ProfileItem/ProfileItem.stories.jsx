import { ProfileItem } from "./ProfileItem";
import UserIcon from "./icons/UserIcon";
import HeartIcon from "./icons/HeartIcon";
import SuitcaseIcon from "./icons/SuitcaseIcon";
import LockIcon from "./icons/LockIcon";
import CardIcon from "./icons/CardItem";

export default {
  title: "Components/ProfileItem",
  component: ProfileItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    svgElement: {
      description: "Иконки",
      control: { type: "select" },
      options: [
        "UserIcon",
        "LockIcon",
        "CardIcon",
        "SuitcaseIcon",
        "HeartIcon",
      ],
      mapping: {
        UserIcon: <UserIcon />,
        LockIcon: <LockIcon />,
        CardIcon: <CardIcon />,
        SuitcaseIcon: <SuitcaseIcon />,
        HeartIcon: <HeartIcon />,
      },
    },
  },
};

export const ProfileItemDemo = {
  args: {
    title: "Персональные данные",
    svgElement: <UserIcon />,
  },
};
