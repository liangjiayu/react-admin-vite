import {
  CopyFilled,
  CopyOutlined,
  DeleteOutlined,
  DiffFilled,
  EditFilled,
  EditOutlined,
  FormOutlined,
  HighlightFilled,
  PieChartFilled,
  ScissorOutlined,
  SnippetsFilled,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

const cases = [
  {
    icon: <EditOutlined />,
    name: 'EditOutlined',
  },
  {
    icon: <FormOutlined />,
    name: 'FormOutlined',
  },
  {
    icon: <CopyOutlined />,
    name: 'CopyOutlined',
  },
  {
    icon: <ScissorOutlined />,
    name: 'ScissorOutlined',
  },
  {
    icon: <DeleteOutlined />,
    name: 'DeleteOutlined',
  },
  {
    icon: <SnippetsOutlined />,
    name: 'SnippetsOutlined',
  },
  {
    icon: <EditFilled />,
    name: 'EditFilled',
  },
  {
    icon: <CopyFilled />,
    name: 'CopyFilled',
  },
  {
    icon: <SnippetsFilled />,
    name: 'SnippetsFilled',
  },
  {
    icon: <DiffFilled />,
    name: 'DiffFilled',
  },
  {
    icon: <HighlightFilled />,
    name: 'HighlightFilled',
  },
  {
    icon: <PieChartFilled />,
    name: 'PieChartFilled',
  },
];

const AntIconCase = () => {
  return (
    <Card
      title="ant-design 图标"
      type="inner"
      size="small"
      extra={
        <a
          href="https://ant-design.antgroup.com/components/icon-cn"
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

export default AntIconCase;
