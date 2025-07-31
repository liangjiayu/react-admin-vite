import { Card } from 'antd';
import {
  EmojioneBaby,
  EmojioneBearFace,
  EmojioneBoyDarkSkinTone,
  SkillIconsDartLight,
  SkillIconsDiscord,
  SkillIconsFastapi,
} from '@/assets/icon';

const cases = [
  {
    icon: <EmojioneBaby />,
    name: 'EmojioneBaby',
  },
  {
    icon: <EmojioneBearFace />,
    name: 'EmojioneBearFace',
  },
  {
    icon: <EmojioneBoyDarkSkinTone />,
    name: 'EmojioneBoyDarkSkinTone',
  },
  {
    icon: <SkillIconsDartLight />,
    name: 'SkillIconsDartLight',
  },
  {
    icon: <SkillIconsDiscord />,
    name: 'SkillIconsDiscord',
  },
  {
    icon: <SkillIconsFastapi />,
    name: 'SkillIconsFastapi',
  },
];

const LocalSvgCase = () => {
  return (
    <Card
      title="本地svg方案"
      type="inner"
      size="small"
      style={{ marginBottom: 20 }}
    >
      <div className="grid grid-cols-6 gap-1">
        {cases.map((item) => (
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

export default LocalSvgCase;
