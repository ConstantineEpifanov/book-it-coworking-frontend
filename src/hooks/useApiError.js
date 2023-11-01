import React from "react";

export function useApiError() {
  // стейт для обработки сообщения и статуса ошибки приходящего с апи
  const [isErrApi, setIsErrApi] = React.useState({ message: "", status: "" });

  if (isErrApi.message.email) {
    setIsErrApi({ ...isErrApi, message: isErrApi.message.email });
  } else if (isErrApi.message.error) {
    setIsErrApi({ ...isErrApi, message: isErrApi.message.error });
  }

  const clearApiError = () => {
    setIsErrApi({
      message: "",
      status: "",
    });
  };

  return {
    isErrApi,
    setIsErrApi,
    clearApiError,
  };
}
