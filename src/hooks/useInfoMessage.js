import { useState } from "react";

export const useInfoMessage = () => {
  const [infoMessage, setInfoMessage] = useState(null);
  const [infoType, setInfoType] = useState("error");

  const showMessage = (message, type = "error") => {
    setInfoMessage(message);
    setInfoType(type);
    setTimeout(() => {
      setInfoMessage(null);
    }, 4000);
  };

  return [infoType, infoMessage, showMessage];
};
