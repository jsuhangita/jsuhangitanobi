import {POST} from './http.request';
import {storageKeys, set, get} from '../util/storage.util';
import {APP_CONFIG_DEFAULT} from '../vairables/common.variables';

export async function initialSetup() {
  const firstRun = await get(storageKeys.INITIAL_SETUP);
  if (!firstRun) {
    set(storageKeys.INITIAL_SETUP, true);
    set(storageKeys.APP_CONFIG, APP_CONFIG_DEFAULT);
  }
  return get(storageKeys.APP_CONFIG);
}

export async function submitLogin(data) {
  try {
    return await POST('LOGIN', '', {
      ...data,
    });
  } catch (e) {
    throw e;
  }
}
