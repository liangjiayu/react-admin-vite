import { Card } from 'antd';
import {
  Anvil,
  BrickWall,
  Building,
  Building2,
  Castle,
  Church,
  ScreenShareOff,
  Send,
  SendHorizontal,
  SmartphoneNfc,
  SmilePlus,
  Speech,
} from 'lucide-react';

const LucideCases = [
  {
    icon: <Anvil />,
    name: 'Anvil',
  },
  {
    icon: <BrickWall />,
    name: 'BrickWall',
  },
  {
    icon: <Building />,
    name: 'Building',
  },
  {
    icon: <Building2 />,
    name: 'Building2',
  },
  {
    icon: <Castle />,
    name: 'Castle',
  },
  {
    icon: <Church />,
    name: 'Church',
  },
  {
    icon: <ScreenShareOff />,
    name: 'ScreenShareOff',
  },
  {
    icon: <Send />,
    name: 'Send',
  },
  {
    icon: <SendHorizontal />,
    name: 'SendHorizontal',
  },
  {
    icon: <SmartphoneNfc />,
    name: 'SmartphoneNfc',
  },
  {
    icon: <SmilePlus />,
    name: 'SmilePlus',
  },
  {
    icon: <Speech />,
    name: 'Speech',
  },
];

const LucideCase = () => {
  return (
    <Card
      title="lucide 图标"
      type="inner"
      size="small"
      extra={
        <a href="https://lucide.dev/icons/" target="_blank">
          搜索图标
        </a>
      }
    >
      <div className="grid grid-cols-6 gap-1">
        {LucideCases.map((item) => (
          <div
            key={item.name}
            className="text-center py-[16px] text-gray-700"
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

export default LucideCase;
