import React from "react";

export function useApiError() {
  // стейт для обработки сообщения и статуса ошибки приходящего с апи
  const [isErrApi, setIsErrApi] = React.useState({ message: "", status: "" });

  if (isErrApi.message.email) {
    setIsErrApi({ ...isErrApi, message: isErrApi.message.email[0] });
  } else if (isErrApi.message.error) {
    setIsErrApi({ ...isErrApi, message: isErrApi.message.error[0] });
  }

  const clearApiError = () => {
    if (isErrApi) {
      setIsErrApi({
        message: "",
        status: "",
      });
    }
  };

  return {
    isErrApi,
    setIsErrApi,
    clearApiError,
  };
}
