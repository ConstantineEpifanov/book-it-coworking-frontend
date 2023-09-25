import Popup from "./Popup";

export default {
  title: "Components/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      description: "Откр./Закрытие всплывающего окна",
    },
  },
};

export function PopupPromo(args) {
  return (
    <Popup {...args}>
      <p className="popup__header">Оплата прошла успешно</p>
      <p className="popup__text">
        Письмо с подтверждением и деталями бронирования отправленовам на
        указанный номер телефона и электронную почту
      </p>
    </Popup>
  );
}
