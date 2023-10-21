import { Logo } from "./Logo";

export default {
  title: "UI-Kit/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const HeaderLogo = {
  args: {
    className: "",
  },
};

export const FooterLogo = {
  args: {
    className: "logo_type_footer",
  },
};
