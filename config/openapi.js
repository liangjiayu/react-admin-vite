import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generateService } from '@umijs/openapi';

const __filename = fileURLToPath(import.meta.url);
const __rootDir = resolve(__filename, '../..');

/**
 * FastApi 协议
 * openapi 自动生成接口函数工具
 * @see https://github.com/chenshuai2144/openapi2typescript
 */
generateService({
  // schemaPath: join(__rootDir, 'config/swagger.json'),
  schemaPath: 'https://fast-api-mock.netlify.app/doc',
  requestLibPath: "import request from '@/utils/request'",
  projectName: 'fast-api',
  namespace: 'FastAPI',
  serversPath: join(__rootDir, 'app/services'),
  // dataFields: ['data'],
  isCamelCase: false,
});
