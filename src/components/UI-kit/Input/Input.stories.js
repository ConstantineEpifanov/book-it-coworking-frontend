import Input from "./Input";

export default {
  title: "UI-Kit/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    inputType: {
      description: "Тип поля ввода",
      control: { type: "select" },
      options: ["datetime-local", "email", "password", "time", "text"],
    },
  },
};

export const InputPromo = {
  args: {
    inputType: "text",
    inputPlaceholder: "Ввод...",
  },
};
