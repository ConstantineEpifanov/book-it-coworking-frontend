import Button from "./Button";

export default {
  title: "UI-Kit/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color", description: "Подбор цвета цвета" },
    btnText: {
      description: "Текст кнопки",
    },
    // временно оставлю так
    btnType: {
      description: "Тип кнопки",
      // control: { type: "select" },
      // options: [
      //   "button",
      //   "submit",
      // ],
    },
    btnClass: {
      description: "Классы стилей для кнопки",
      control: { type: "select" },
      options: [
        "button_type_form",
        "button_type_form",
        "button_size_smail",
        "button_type_transparent",
        "button_size_mini",
        "button_active",
        "button_type_link",
        "button_type_tertiary-map",
      ],
    },
  },
};

export const ButtonPromo = {
  args: {
    btnText: "Войти",
  },
};

// тут коллекция историй по разным вариантам кнопок
export function Type(args) {
  return (
    <div className="button_box">
      <Button
        btnClass="button_type_transparent button_size_large"
        btnText="Больше локаций"
        {...args}
      />
      <Button
        btnClass="button_type_transparent button_size_middle"
        btnText="Подробнее"
        {...args}
      />
      <Button
        btnClass="button_type_form button_size_small"
        btnText="Сбросить"
        {...args}
      />
      <Button btnClass="button_type_form" btnText="Войти" {...args} />
      <Button
        btnClass="button_active button_size_middle"
        btnText="1 Переговорная"
        {...args}
      />
      <Button btnClass="button_active button_size_mini" btnText="7" {...args} />
      <Button
        btnClass="button_type_link button_size_middle"
        btnText="Уже есть аккаунт?"
        {...args}
      />
      <Button
        btnClass="button_type_tertiary-map"
        btnText="Показать на карте"
        {...args}
      />
    </div>
  );
}
