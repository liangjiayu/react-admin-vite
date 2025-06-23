import { generateService } from "@umijs/openapi";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

generateService({
  schemaPath: join(__dirname, "swagger.json"), // 或使用远程URL
  // serversPath: "./src/services", // 生成代码的输出目录
  requestLibPath: "import request from '@/utils/request'", // 自定义请求库
  // 其他可选配置

  projectName: "ant-design-pro", // 项目名称
  namespace: "API", // 命名空间
  serversPath: "./src/services",
});
