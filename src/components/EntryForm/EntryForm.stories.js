import Popup from "../Popup/Popup";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";
import EntryForm from "./EntryForm";

export default {
  title: "Components/Form",
  component: EntryForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Заголовок",
    },
  },
};

export function FormPromo(args) {
  return (
    <EntryForm title="Form" {...args}>
      <Input inputType="text" inputPlaceholder="Введите текст.." />
      <Button
        btnClass="button_type_form"
        btnType="button"
        btnText="Войти"
        onClick={() => {}}
      />
    </EntryForm>
  );
}

export function TypeLogin(args) {
  return (
    <Popup isOpen="true">
      <EntryForm title="Вход" {...args}>
        <Input inputType="email" inputPlaceholder="Email" />
        <Input inputType="password" inputPlaceholder="Пароль" />
        <Button
          btnClass="button_type_form"
          btnType="button"
          btnText="Войти"
          onClick={() => {}}
        />
        <Button
          btnClass="button_type_link"
          btnType="button"
          btnText="Зарегистрироваться"
          onClick={() => {}}
        />
      </EntryForm>
    </Popup>
  );
}
