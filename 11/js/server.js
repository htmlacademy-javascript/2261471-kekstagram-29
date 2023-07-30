const Route = {
  GET: 'https://29.javascript.pages.academy/kekstagram/data',
  POST: 'https://29.javascript.pages.academy/kekstagram',
};

const sendRequest = (onSuccess, onError, method, body) => {
  fetch(
    Route[method],
    {
      method: method,
      body: body
    },
  )
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((err) => {
      onError(err);
    });
};

// Функция получения данных
const getData = (onSuccess, onError, method = 'GET') => sendRequest(onSuccess, onError, method);
// Функция отправки данных
const sendData = (onSuccess, onError, method = 'POST', body) => sendRequest(onSuccess, onError, method, body);

export {getData, sendData};
