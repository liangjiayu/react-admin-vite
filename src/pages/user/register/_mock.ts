import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
  url: '/api/register',
  method: 'POST',
  body: {
    data: { status: 'ok', currentAuthority: 'user' },
  },
});
