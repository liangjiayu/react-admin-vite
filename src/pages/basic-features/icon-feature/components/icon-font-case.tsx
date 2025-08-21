import { Card } from 'antd';
import IconFont from '@/components/icon-font';

const cases = [
  {
    icon: <IconFont type="icon-dyanjing" />,
    name: 'icon-dyanjing',
  },
  {
    icon: <IconFont type="icon-caidan" />,
    name: 'icon-caidan',
  },
  {
    icon: <IconFont type="icon-anquan" />,
    name: 'icon-anquan',
  },
  {
    icon: <IconFont type="icon-hongbao" />,
    name: 'icon-hongbao',
  },
  {
    icon: <IconFont type="icon-yifu" />,
    name: 'icon-yifu',
  },
  {
    icon: <IconFont type="icon-xitong" />,
    name: 'icon-xitong',
  },
];

const IconFontCase = () => {
  return (
    <Card
      title="icon-font 方案"
      type="inner"
      size="small"
      extra={
        <a href="https://www.iconfont.cn/" target="_blank" rel="noopener">
          搜索图标
        </a>
      }
    >
      <div className="grid grid-cols-6 gap-1">
        {cases.map((item) => (
          <div
            key={item.name}
            className="py-[16px] text-center text-gray-700"
            style={{ fontSize: 'var(--icon-case-size)' }}
          >
            {item.icon}
            <div className="text-[13px] text-gray-500">{item.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IconFontCase;
