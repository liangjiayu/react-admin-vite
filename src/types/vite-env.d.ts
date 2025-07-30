/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  /** 网站标题 */
  readonly VITE_SITE_APP_TITLE: string;
}

// biome-ignore lint/correctness/noUnusedVariables: false
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
