import { CATS_API_BASEURL, CATS_API_HEADERS, CATS_API_LIMIT } from './constants';

class CatsApi {
  constructor({baseUrl, headers}){
    this._baseURL = baseUrl;
    this._headers = headers;
  }

  getCats(pageCounter) {
    return fetch(`${this._baseURL}?limit=${CATS_API_LIMIT}&page=${pageCounter}`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.status === 200){
        return res.json();
      } else {
        return Promise.reject('При получении данных произошла ошибка');
      }
    })
    .then(data => data);
  }
}

const catsApi = new CatsApi({
  baseUrl: CATS_API_BASEURL,
  headers: CATS_API_HEADERS
});

export {catsApi};