class AnimeApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._url}/animes?limit=50`, {
      // credentials: "include",
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      });
  }

  getProfileId() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: "include",
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res.data;
      });
  }

  getTitleData(titleUrl) {
    return fetch(`${this._url}/animes${titleUrl}`, {
      headers: this._headers,
      // credentials: "include",
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      });
  }
}

const animeApi = new AnimeApi({
  baseUrl: "https://shikimori.one/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default animeApi;
