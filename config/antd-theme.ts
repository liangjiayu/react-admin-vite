import type { ThemeConfig } from 'antd';

/**
 * 自定义的Ant Design主题配置
 * @see https://ant.design/theme-editor-cn
 */
const customAntdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#2166f7', //  #2166f7(蓝色) #722ed1(紫色)
    borderRadius: 8,
    wireframe: false,
    colorInfo: '#2166f7',
  },
  hashed: false,
  // algorithm: theme.darkAlgorithm,
};

export default customAntdTheme;
