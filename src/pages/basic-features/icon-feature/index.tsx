import { Card } from 'antd';
import AntIconCase from './components/ant-icon-case';
import IconFontCase from './components/icon-font-case';
import IconifyOnline from './components/iconify-online';
import LocalSvgCase from './components/local-svg-case';
import LucideCase from './components/lucide-case';

const IconFeature = () => {
  return (
    <div
      className="text-[40px]"
      style={{ '--icon-case-size': '32px' } as React.CSSProperties}
    >
      <Card title="高质量图标集">
        <div className="flex flex-col gap-5">
          <AntIconCase />
          <LucideCase />
        </div>
      </Card>
      <Card title="第三方图标集" style={{ marginTop: 40 }}>
        <IconifyOnline />
      </Card>

      <Card title="自定义图标" style={{ marginTop: 40 }}>
        <div className="flex flex-col gap-5">
          <IconFontCase />
          <LocalSvgCase />
        </div>
      </Card>
    </div>
  );
};

export default IconFeature;
