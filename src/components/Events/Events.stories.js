import { exampleEventsData } from "../../config/exampleEventsData";
import { Events } from "./Events";

export default {
  title: "Components/Events",
  component: Events,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const EventsDemo = {
  args: {
    eventsArray: exampleEventsData,
  },
};
