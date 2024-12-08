class AnimeApi {
  constructor({ baseUrl, videoUrl, kodikUrl, headers }) {
    this._url = baseUrl;
    this._videourl = videoUrl;
    this._kodikurl = kodikUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._url}/animes?limit=50&order=popularity`, {
      // credentials: "include",
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      });
  }

  getOngoingPopularity() {
    return fetch(
      `${this._url}/animes?limit=25&status=ongoing&order=popularity&season=2024`,
      {
        // credentials: "include",
      }
    )
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

  getTopicHot() {
    return fetch(`${this._url}/topics/hot`, {
      headers: this._headers,
    })
      .then((res) => {
        return this._getResponseData(res);
      })
      .then((res) => {
        return res;
      });
  }

  getTitleVideo(titleId) {
    return fetch(`${this._videourl}/shikivideos/${titleId}`, {
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
  //&translation_id=609

  getKodikVideo(titleId, KODIK_TOKEN) {
    return fetch(
      `${this._kodikurl}/search?token=${KODIK_TOKEN}&shikimori_id=${titleId}&with_episodes=true&with_material_data=true`,
      {
        // method: "GET",
        // headers: this._headers,
        // credentials: "include",
        // Origin: "http://violet-cube.drmackey.keenetic.link",
      }
    )
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
  videoUrl: "https://smarthard.net/api",
  kodikUrl: "https://kodikapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default animeApi;
