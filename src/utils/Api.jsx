/* eslint-disable camelcase */
export function checkResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((errorResponse) => {
        // ошибка с сообщением
        if (errorResponse) {
          return Promise.reject(errorResponse);
        }
        //  общее сообщение об ошибке
        return Promise.reject(
          new Error(`Ошибка ${res.statusText} ${res.status}`),
        );
      });
}

function request(url, options) {
  return fetch(
    `https://spotit.acceleratorpracticum.ru/api/v1${url}`,
    options,
  ).then(checkResponse);
}

export function setHeaders() {
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

export function resetPassConfirmCode({ email }) {
  return request("/users/reset_password_confirmation_code/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
    }),
  });
}

export function resetPass({ email, confirmation_code, password, re_password }) {
  return request("/users/reset_password/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      confirmation_code,
      password,
      re_password,
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

export function getActiveOrders() {
  return request("/orders/?finished=false", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getFinishedOrders() {
  return request("/orders/?finished=true", {
    method: "GET",
    headers: setHeaders(),
  });
}

export function publishReview(
  locationId,
  spotId,
  orderId,
  { description, rating },
) {
  return request(
    `/locations/${locationId}/spots/${spotId}/order/${orderId}/reviews/`,
    {
      method: "POST",
      headers: setHeaders(),
      body: JSON.stringify({
        description,
        rating,
      }),
    },
  );
}

export function cancelOrder(locationId, spotId, orderId) {
  return request(`/locations/${locationId}/spots/${spotId}/order/${orderId}/`, {
    method: "PATCH",
    headers: setHeaders(),
  });
}

export function editUserData(data) {
  return request("/users/me/", {
    method: "PATCH",
    headers: setHeaders(),
    body: JSON.stringify(data),
  });
}

export function editUserAvatar(data) {
  return request("/avatar", {
    method: "PUT",
    headers: setHeaders(),
    body: JSON.stringify(data),
  });
}

export function changePass({ current_password, password, re_password }) {
  return request("/users/change_password/", {
    method: "POST",
    headers: setHeaders(),
    body: JSON.stringify({
      current_password,
      password,
      re_password,
    }),
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
  return request(`/locations/${id}/plan_photo/`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function getSpots(id, data) {
  return request(`/locations/${id}/spots/?${new URLSearchParams(data)}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

export function postOrder(locationId, spotId, data) {
  return request(`/locations/${locationId}/spots/${spotId}/order/`, {
    method: "POST",
    headers: setHeaders(),
    body: JSON.stringify(data),
  });
}

// search

export function searchLocations(params = {}) {
  const query = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    if (params[key] !== undefined && params[key] !== null) {
      if (key === "metro" && Array.isArray(params[key])) {
        params[key].forEach((value) => {
          query.append("metro", value);
        });
      } else {
        query.append(key, params[key]);
      }
    }
  });

  return request(`/locations/?${query.toString()}`, {
    method: "GET",
    headers: setHeaders(),
  });
}

// Payments

export function pay(locationId, spotId, orderId) {
  return request(
    `/locations/${locationId}/spots/${spotId}/order/${orderId}/pay/`,
    {
      method: "PATCH",
      headers: setHeaders(),
    },
  );
}
