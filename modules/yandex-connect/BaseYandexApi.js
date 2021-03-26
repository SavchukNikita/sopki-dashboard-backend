import axios from 'axios';
import https from 'https';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import request from 'request';

class BaseYandexApi {
  constructor() {
    this.token = process.env.YANDEX_CONNECT_TOKEN || '';
    this.host = 'https://api.directory.yandex.net';
    this.idOrg = '4151965';

    this.config = {
      headers: {
        Host: this.host,
        Authorization: `OAuth ${this.token}`,
        Accept: 'application/json',
      },
    };
  }

  async get(url) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const options = {
      url: this.host + url,
      headers: {
        Host: this.host,
        Authorization: `OAuth ${this.token}`,
        Accept: 'application/json',
      },
    };

    request(options, (error, response, body) => {
      console.log(error);
      console.log(response);
    });

    /* try {
      const res = axios.get(this.host + url, {
        headers: this.config.headers,
        httpsAgent,
      });

      return res;
    } catch (error) {
      console.log(error);
    } */

    return null;
  }

  post() {
    const body = {
      name: {
        first: 'sdaa',
        second: 'dssds',
        middle: 'sasa',
      },
      nikname: 'dsds',
      password: '123456789',
    };
    axios.post(`${this.host}/v6/users/`, body, this.config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}

export default BaseYandexApi;
