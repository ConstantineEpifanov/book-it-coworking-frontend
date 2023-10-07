import { BrowserRouter as Router } from "react-router-dom";
import { ProfileDashboard } from "./ProfileDashboard";

export default {
  title: "Pages/ProfileDashboard",
  component: ProfileDashboard,
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Router>{Story()}</Router>],
};

export const ProfileDashboardDemo = () => <ProfileDashboard />;
