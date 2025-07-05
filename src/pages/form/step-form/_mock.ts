import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
  url: '/api/stepForm',
  method: 'POST',
  body: {
    data: { message: 'Ok' },
  },
});
