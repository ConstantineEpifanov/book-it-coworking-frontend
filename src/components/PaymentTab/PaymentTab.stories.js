import { PaymentTab } from "./PaymentTab";

export default {
  title: "Profile/PaymentTab",
  component: PaymentTab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const PaymentTabDemo = {
  args: {
    user: {
      card: {
        number: "1100230040001212",
        valid: "11/29",
        type: "mastercard",
      },
    },
  },
};
