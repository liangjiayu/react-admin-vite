import mockjs from 'mockjs';
import { defineMock } from 'vite-plugin-mock-dev-server';

const getTags = () => {
  return {
    data: mockjs.mock({
      'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
    }),
  };
};

export default defineMock({
  url: '/api/tags',
  method: 'GET',
  body: getTags,
});
