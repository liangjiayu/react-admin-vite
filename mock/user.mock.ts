import { defineMock } from 'vite-plugin-mock-dev-server';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function serverSuccess(data?: any) {
  return {
    code: 0,
    data: data || null,
    message: '请求成功',
  };
}

function serverError(message?: string) {
  return {
    code: 500,
    data: null,
    message: message || '服务器内部错误',
  };
}

async function getFakeCaptcha() {
  await waitTime(2000);
  return 'captcha-xxx';
}

/** 权限标识有 admin、guest，默认是有权限的 */
let access = 'admin';

const getAccess = () => {
  return access;
};

async function getUserInfo(req, res) {
  if (!getAccess()) {
    res.statusCode = 401;
    res.end(JSON.stringify(serverError('请先登录')));
    return;
  }
  res.end(
    JSON.stringify(
      serverSuccess({
        name: 'Local Me',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        access: getAccess(),
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      }),
    ),
  );
}

async function postLoginAccount(req: any) {
  const { password, username, type } = req.body;
  await waitTime(2000);
  if (password === '123456' && username === 'admin') {
    access = 'admin';
    return serverSuccess();
  }
  if (password === '123456' && username === 'user') {
    access = 'user';
    return serverSuccess();
  }
  if (type === 'mobile') {
    access = 'admin';
    return serverSuccess();
  }

  access = 'guest';
  return serverError('用户名或密码错误');
}

async function getHttp500() {
  return {
    timestamp: 1513932555104,
    status: 500,
    error: 'error',
    message: 'error',
    path: '/base/category/list',
  };
}

async function getHttp404() {
  return {
    timestamp: 1513932555104,
    status: 404,
    error: 'Not Found',
    message: 'No message available',
    path: '/base/category/list/2121212',
  };
}

async function getHttp403() {
  return {
    timestamp: 1513932555104,
    status: 403,
    error: 'Forbidden',
    message: 'Forbidden',
    path: '/base/category/list',
  };
}

async function getHttp401() {
  return {
    timestamp: 1513932555104,
    status: 401,
    error: 'Unauthorized',
    message: 'Unauthorized',
    path: '/base/category/list',
  };
}

export default defineMock([
  {
    url: '/api/currentUser',
    response: getUserInfo,
  },
  {
    url: '/api/login/captcha',
    body: getFakeCaptcha,
  },
  {
    url: '/api/login/account',
    method: 'POST',
    body: postLoginAccount,
  },
  {
    url: '/api/login/outLogin',
    method: 'POST',
    body: () => {
      access = '';
      return serverSuccess();
    },
  },
  {
    url: '/api/500',
    body: getHttp500,
    status: 500,
  },
  {
    url: '/api/404',
    body: getHttp404,
    status: 404,
  },
  {
    url: '/api/403',
    body: getHttp403,
    status: 403,
  },
  {
    url: '/api/401',
    body: getHttp401,
    status: 401,
  },
]);
