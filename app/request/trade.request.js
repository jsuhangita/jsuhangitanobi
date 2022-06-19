import {GET} from './http.request';

export async function fetchCoinList() {
  try {
    const {data} = await GET('LIST');
    return data;
  } catch (e) {
    throw e;
  }
}
