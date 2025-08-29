import request from '@/utils/request';
import type { ListItemDataType, Params } from './data.d';

export async function queryFakeList(
  params: Params,
): Promise<{ list: ListItemDataType[] }> {
  return request('/api/fake_list', {
    params,
  });
}
