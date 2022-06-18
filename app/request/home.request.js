import {POST} from './http.request';

export async function fetchDashboard() {
  try {
    return await POST('DASHBOARD');
  } catch (e) {
    throw e;
  }
}
