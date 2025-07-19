import { generateService } from '@umijs/openapi';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __rootDir = resolve(__filename, '../..');

// generateService({
//   /** 协议地址，支持本地和远程URL */
//   // schemaPath: join(__rootDir, 'config/swagger.json'),
//   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
//   /** 自定义请求库 */
//   requestLibPath: "import request from '@/utils/request'",
//   /** 项目名称 */
//   projectName: 'ant-design-pro',
//   /** 命名空间 */
//   namespace: 'OpenAPI',
//   /** 生成的文件夹的路径 */
//   serversPath: join(__rootDir, 'src/services'),
//   /** response中数据字段 */
//   dataFields: ['data'],
// });

/** 第二份协议 */
generateService({
  // schemaPath: join(__rootDir, 'config/swagger.json'),
  schemaPath: 'http://127.0.0.1:7100/api-docs',
  requestLibPath: "import request from '@/utils/request'",
  projectName: 'fast-api',
  namespace: 'FastAPI',
  serversPath: join(__rootDir, 'src/services'),
  dataFields: ['data'],
  isCamelCase: false,
  // apiPrefix: "''",
  // hook: {
  //   customFunctionName: (data) => {
  //     const method = data.operationId.split('__')[1];

  //     return method || data.operationId;
  //   },
  // },

  // hook: {
  //   customClassName: (tagName) => {
  //     console.log('tagName', tagName);
  //   },
  // },
});
