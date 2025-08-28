import { defineMock } from 'vite-plugin-mock-dev-server';
import mockjs from 'mockjs';

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
