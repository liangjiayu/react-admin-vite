import { generateService } from '@umijs/openapi';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __rootDir = resolve(__filename, '../..');

generateService({
  /** 协议地址，支持本地和远程URL */
  schemaPath: join(__rootDir, 'config/swagger.json'),
  // schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
  /** 自定义请求库 */
  requestLibPath: "import request from '@/utils/request'",
  /** 项目名称 */
  projectName: 'ant-design-pro',
  /** 命名空间 */
  namespace: 'API',
  /** 生成的文件夹的路径 */
  serversPath: join(__rootDir, 'src/services'),
  /** response中数据字段 */
  dataFields: ['data'],
});
