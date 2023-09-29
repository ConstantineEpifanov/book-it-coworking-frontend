import PasswordInput from "./PasswordInput";

export default {
  title: "UI-Kit/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const PasswordInputPromo = () => (
  <PasswordInput inputPlaceholder="Введите пароль" />
);
