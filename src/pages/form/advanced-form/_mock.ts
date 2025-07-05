import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
  url: '/api/advancedForm',
  method: 'POST',
  body: {
    data: { message: 'Ok' },
  },
});
