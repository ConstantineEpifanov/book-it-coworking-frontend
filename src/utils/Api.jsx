/* eslint-disable camelcase */
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

export function setHeaders() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
}

// Регистрация в два этапа и логин

export function register({
  email,
  password,
  first_name,
  last_name,
  re_password,
}) {
  return request("/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      first_name,
      last_name,
      re_password,
    }),
  });
}

export function confirmRegister({ email, confirmation_code }) {
  return request("/users/activation/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      confirmation_code,
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
  return request("/locations", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getEvents() {
  return request("/events", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getQuestions() {
  return request("/questions", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getRules() {
  return request("/rules", {
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
