export function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}`));
}

function request(url, options) {
  return fetch(`http://185.41.160.27/api/v1${url}`, options).then(
    checkResponse,
  );
}

function setHeaders() {
  const token = localStorage.getItem("token");

  if (token) {
    return {
      Authorization: `Token ${token}`,
      "Content-Type": "application/json",
    };
  }

  return {
    "Content-Type": "application/json",
  };
}

// Регистрация в два этапа и логин

export function register({ email, password, firstName, lastName, rePassword }) {
  return request("/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
      rePassword,
    }),
  });
}

export function confirmRegister({ email, confirmationCode }) {
  return request("/users/activation/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      confirmationCode,
    }),
  });
}

export function login({ email, password }) {
  return request("/auth/token/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

// Получение основных данных

export function getLocations() {
  return request("/locations/", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getEvents() {
  return request("/events/", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getQuestions() {
  return request("/questions/", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getRules() {
  return request("/rules/", {
    method: "GET",
    headers: setHeaders(),
  });
}

// Профиль

export function getUserInfo() {
  return request("/users/me/", {
    method: "GET",
    headers: setHeaders(),
  });
}
