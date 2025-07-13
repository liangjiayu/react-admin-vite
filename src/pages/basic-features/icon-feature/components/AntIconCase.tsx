import { Card } from 'antd';
import {
  EditOutlined,
  FormOutlined,
  CopyOutlined,
  ScissorOutlined,
  DeleteOutlined,
  SnippetsOutlined,
  EditFilled,
  CopyFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled,
  PieChartFilled,
} from '@ant-design/icons';

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
        <a href="https://ant-design.antgroup.com/components/icon-cn" target="_blank">
          搜索图标
        </a>
      }
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

export default AntIconCase;
