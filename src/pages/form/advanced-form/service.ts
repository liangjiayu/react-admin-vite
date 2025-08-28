import request from '@/utils/request';

export async function fakeSubmitForm(params: any) {
  return request('/api/advancedForm', {
    method: 'POST',
    data: params,
  });
}
