import request from '@/utils/request';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  mail: string;
  password: string;
  confirm: string;
  mobile: string;
  captcha: string;
  prefix: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request<StateType>('/api/register', {
    method: 'POST',
    data: params,
  });
}
