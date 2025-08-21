import { Icon } from '@iconify/react';
import { Card } from 'antd';

const cases = [
  {
    icon: <Icon icon="vscode-icons:file-type-appsemble" />,
    name: 'vscode-icons:appsemble',
  },
  {
    icon: <Icon icon="vscode-icons:file-type-appveyor" />,
    name: 'vscode-icons:appveyor',
  },
  {
    icon: <Icon icon="vscode-icons:file-type-arduino" />,
    name: 'vscode-icons:arduino',
  },
  {
    icon: <Icon icon="vscode-icons:file-type-asciidoc" />,
    name: 'vscode-icons:asciidoc',
  },
  {
    icon: <Icon icon="vscode-icons:file-type-asp" />,
    name: 'vscode-icons:asp',
  },
  {
    icon: <Icon icon="vscode-icons:file-type-bicep" />,
    name: 'vscode-icons:bicep',
  },
  {
    icon: <Icon icon="streamline-emojis:airplane" />,
    name: 'streamline:airplane',
  },
  {
    icon: <Icon icon="streamline-emojis:alien" />,
    name: 'streamline:alien',
  },
  {
    icon: <Icon icon="streamline-emojis:amazed-face" />,
    name: 'streamline:amazed-face',
  },
  {
    icon: <Icon icon="streamline-emojis:ambulance" />,
    name: 'streamline:ambulance',
  },
  {
    icon: <Icon icon="streamline-emojis:american-football" />,
    name: 'streamline:american-football',
  },
  {
    icon: <Icon icon="streamline-emojis:bar-chart" />,
    name: 'streamline:bar-chart',
  },
];

const IconifyOnline = () => {
  return (
    <Card
      title="Iconify CDN方案"
      type="inner"
      size="small"
      extra={
        <a
          href="https://icon-sets.iconify.design/"
          target="_blank"
          rel="noopener"
        >
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

export default IconifyOnline;
