import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateService } from '@umijs/openapi';

const __filename = fileURLToPath(import.meta.url);
const __rootDir = resolve(__filename, '../..');

// generateService({
//   /** 协议地址，支持本地和远程URL */
//   schemaPath: join(__rootDir, 'config/swagger.json'),
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

/**
 * FastApi 协议
 * openapi 自动生成接口函数工具
 * @see https://github.com/chenshuai2144/openapi2typescript
 */
generateService({
  // schemaPath: join(__rootDir, 'config/swagger.json'),
  schemaPath: 'http://fast-api.liangjiayu.cn/api-docs',
  requestLibPath: "import request from '@/utils/request'",
  projectName: 'fast-api',
  namespace: 'FastAPI',
  serversPath: join(__rootDir, 'src/services'),
  dataFields: ['data'],
  isCamelCase: false,
});
