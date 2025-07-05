import request from '@/utils/request';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<CurrentUser> {
  return request('/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ list: ListItemDataType[] }> {
  return request('/api/fake_list_Detail', {
    params,
  });
}
