/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  /** 网站标题 */
  readonly VITE_SITE_APP_TITLE: string;
  /** 端口号 */
  readonly VITE_PORT: string;
  /** 接口代理地址 */
  readonly VITE_PROXY_URL: string;
  /** 是否开启mock服务 */
  readonly VITE_MOCK_ENABLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
