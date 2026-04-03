import { Alert, Card, Tag, Typography } from 'antd';
import useAccess from '@/hooks/use-access';

const { Title, Paragraph, Text } = Typography;

const AdminManagerPage = () => {
  const access = useAccess();

  return (
    <div className="!space-y-5">
      <Card title="权限示例">
        <Typography>
          <Title level={4}>当前权限状态</Title>
          <Paragraph>
            <Text strong>isAdmin：</Text>
            {access.isAdmin ? (
              <Tag color="green">有权限</Tag>
            ) : (
              <Tag color="red">无权限</Tag>
            )}
          </Paragraph>
          <Paragraph>
            当前用户的 <Text code>isAdmin</Text>{' '}
            权限为随机生成，刷新页面可能会变化。
          </Paragraph>

          {access.isAdmin ? (
            <Alert
              type="success"
              message="你拥有管理员权限，可以访问受保护的页面。"
              showIcon
            />
          ) : (
            <Alert
              type="warning"
              message="你没有管理员权限，访问需要 isAdmin 权限的页面会显示 403。"
              showIcon
            />
          )}
        </Typography>
      </Card>

      <Card title="需要 isAdmin 权限的页面">
        <Typography>
          <Paragraph>
            下方内容需要 <Text code>isAdmin</Text> 权限才能查看：
          </Paragraph>
          {access.isAdmin ? (
            <Alert
              type="success"
              message="恭喜，你有权限查看此内容！"
              showIcon
            />
          ) : (
            <Alert
              type="error"
              message="抱歉，你没有权限查看此内容。"
              showIcon
            />
          )}
        </Typography>
      </Card>
    </div>
  );
};

export default AdminManagerPage;

export const handle = {
  name: '权限示例',
  access: 'isAdmin',
};
