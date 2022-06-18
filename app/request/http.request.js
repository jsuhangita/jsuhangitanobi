import {endpoints, env} from '../config/env.config';
import {storageKeys, get} from '../util/storage.util';
import axios from 'axios';

const baseConfig = {
  baseURL: env.SERVER_URL,
  timeout: 60000, // 60 seconds. for UAT TESTING
  withCredentials: true,
};

export async function POST(
  endpoint,
  path = '',
  data = {},
  headers = {},
  options = {},
) {
  try {
    const appConfig = await get(storageKeys.APP_CONFIG);
    const config = {
      ...baseConfig,
      headers: {
        ...(appConfig.access_token && {
          Authorization: `Bearer ${appConfig.access_token}`,
        }),
        ...headers,
      },
      ...options,
      method: 'post',
      endpoint,
      url: `${endpoints[endpoint]}${path}`,
      data,
    };
    const {data: responseData} = await axios(config);
    return responseData;
  } catch (e) {
    throw e.response.data;
  }
}
