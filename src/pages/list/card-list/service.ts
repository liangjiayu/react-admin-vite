import request from '@/utils/request';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ list: CardListItemDataType[] }> {
  return request('/api/card_fake_list', {
    params,
  });
}
