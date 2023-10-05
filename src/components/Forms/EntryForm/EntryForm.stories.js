import EntryForm from "./EntryForm";
import Popup from "../../Popup/Popup";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import ConfirmRegisterForm from "../ConfirmRegisterForm/ConfirmRegisterForm";
import RestorePassForm from "../RestorePassForm/RestorePassForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import PasswordInput from "../../UI-kit/PasswordInput/PasswordInput";
import ChangePassForm from "../ChangePassForm/ChangePassForm";
import ReviewsForm from "../ReviewsForm/ReviewsForm";
import SearchForm from "../SearchForm/SearchForm";
import { SectionTitle } from "../../SectionTitle/SectionTitle";
import { SectionSubtitle } from "../../SectionSubtitle/SectionSubtitle";

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

// Истории компонента EntryForm

export function FormDemo(args) {
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

export function FormLogin(args) {
  return (
    <Popup>
      <EntryForm title="Войдите на сайт" {...args}>
        <Input inputType="email" inputPlaceholder="Email" />
        <PasswordInput inputPlaceholder="Пароль" inputInfo="Забыли пароль?" />
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

export const TypeRestorePassword = () => <RestorePassForm />;
export const TypeRegister = () => <RegisterForm />;
export const TypeConfirmRegister = () => <ConfirmRegisterForm />;
export const TypeChangePass = () => <ChangePassForm />;
export const TypeReviews = () => <ReviewsForm />;

export const TypeSearchForm = () => (
  <div className="entry-form__inner_search">
    <SectionTitle
      titleText="Поиск по коворкингам Санкт-Петербурга"
      titleClass="section-title_search"
    />
    <SectionSubtitle
      titleText="Вы можете снять рабочее место в одном из 10 коворкингов Сакнт-Петербурга, представленых в нашем катологе"
      titleClass="section-subtitle_search"
    />
    <SearchForm />
  </div>
);
