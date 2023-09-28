import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import RestorePassForm from "../RestorePassForm/RestorePassForm";
// import Popup from "../Popup/Popup";
import Button from "../UI-kit/Button/Button";
import Input from "../UI-kit/Input/Input";
import EntryForm from "./EntryForm";

export default {
  title: "Components/Form",
  component: EntryForm,
  parameters: {
    layout: "fullscreen",
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

export const TypeLogin = (args) => <LoginForm {...args} />;

export function TypeRestorePassword(args) {
  return <RestorePassForm {...args} />;
}
export function TypeRegister(args) {
  return <RegisterForm {...args} />;
}
