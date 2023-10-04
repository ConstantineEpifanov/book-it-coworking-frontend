import { coWorkingOptions, metroOptions } from "../../../config/dataOptions";
import SortData from "./SortData";

export default {
  title: "UI-Kit/SortData",
  component: SortData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SortDataPromocoWorking = {
  args: {
    titleSort: "Вид рабочего места",
    array: coWorkingOptions,
    size: "max",
  },
};

export const SortDataPromoMetro = {
  args: {
    titleSort: "Линия метро",
    array: metroOptions,
    size: "min",
  },
};
