import React from "react";

export function useApiError() {
  // стейт для обработки сообщения и статуса ошибки приходящего с апи
  const [isErrApi, setIsErrApi] = React.useState({
    message: "",
    status: "",
  });

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
