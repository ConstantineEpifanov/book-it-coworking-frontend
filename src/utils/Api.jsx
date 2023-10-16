export function checkResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(new Error(`Ошибка ${res.status}`));
}

function request(url, options) {
  return fetch(
    `https://spotit.acceleratorpracticum.ru/api/v1${url}`,
    options,
  ).then(checkResponse);
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
    Authorization: `Token 930409b4e1c2238901b3a7ea7a7f4a3fb0503de5`,
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

export function getLocations(limit, start) {
  return request(`/locations/?limit=${limit}&offset=${start}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getShortLocations(limit, start) {
  return request(`/short_locations/?limit=${limit}&offset=${start}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getMapLocations() {
  return request("/map_locations/", {
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

export function getCoworkingInfo(id) {
  return request(`/locations/${id}/`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getEquipment(id, category) {
  return request(`/locations/${id}/equipments/?category=${category}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getReviews(id, limit, start) {
  return request(`/locations/${id}/reviews/?limit=${limit}&offset=${start}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getFavorites() {
  return request(`/short_locations/?is_favorited=true`, {
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

// Лайк-дислайк

export function addFavorite(id) {
  return request(`/locations/${id}/favorite/`, {
    method: "POST",
    headers: setHeaders(),
  });
}

export function deleteFavorite(id) {
  return request(`/locations/${id}/favorite/`, {
    method: "DELETE",
    headers: setHeaders(),
  });
}

// Booking

export function getLocationPlanPhoto(id) {
  return request(`/locations/${id}/plan_photo`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getSpots(id) {
  return request(`/locations/${id}/spots`, {
    method: "GET",
    headers: setHeaders(),
  });
}