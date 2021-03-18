import { get } from './methods'

export default class APISDK {

  static UrlJson = {

    MISC: {
      production: 'https://blustack-backend.herokuapp.com',
    },

  }


  static get(url, headers = {}) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers,
      })
        .then(res => res.json())
        .then(result => {
          resolve(result)
        })
        .catch(err => {
          console.error(err)
          reject(err)
        })
    })
  }

}


export class MISC extends APISDK {
  static url = this.UrlJson.MISC['production']

  static getTrendingFeed = () => {
    return this.get(`${this.url}/api/v1/videos`)
  }

}

