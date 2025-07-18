import { Card, Steps } from 'antd';
import moduleStyles from './index.module.less';
import { createStyles } from 'antd-style';

const useStyles = createStyles({
  'custom-steps': {
    '& .ant-steps-item-description': {
      color: 'red !important',
    },
  },
});

const ModifyAntdStyle = () => {
  const { styles:cijStyles } = useStyles();
  return (
    <Card title="修改 Antd 内部样式">
      <Card title="css-in-js 方式" type="inner" style={{ marginBottom: 30 }}>
        <Steps
          className={cijStyles['custom-steps']}
          current={1}
          items={[
            {
              title: 'Finished',
              description: 'This is a description.',
            },
            {
              title: 'In Progress',
              description: 'This is a description.',
            },
            {
              title: 'Waiting',
              description: 'This is a description.',
            },
          ]}
        />
      </Card>

      <Card title="css-module 方式" type="inner">
        <Steps
          className={moduleStyles['custom-steps']}
          current={1}
          items={[
            {
              title: 'Finished',
              description: 'This is a description.',
            },
            {
              title: 'In Progress',
              description: 'This is a description.',
            },
            {
              title: 'Waiting',
              description: 'This is a description.',
            },
          ]}
        />
      </Card>
    </Card>
  );
};

export default ModifyAntdStyle;
