import { Card, Descriptions, Typography } from 'antd';

const { Link } = Typography;

function objToDescItems(data: object) {
  return Object.entries(data).map(([key, value]) => ({
    key: key,
    label: key,
    children: value,
  }));
}

const Home = () => {
  return (
    <div className="!space-y-5">
      <Card title="项目信息">
        <Descriptions
          bordered
          items={[
            {
              key: 'version',
              label: '版本号',
              children: __APP_INFO__.pkg.version,
            },
            {
              key: 'lastBuildTime',
              label: '最后构建时间',
              children: __APP_INFO__.lastBuildTime,
            },
            {
              key: 'author',
              label: '作者',
              children: __APP_INFO__.pkg.author,
            },
            {
              key: 'preview',
              label: '预览地址',
              children: (
                <Link href="http://localhost:5173/" target="_blank">
                  查看
                </Link>
              ),
            },
            {
              key: 'doc',
              label: '文档地址',
              children: (
                <Link href="http://localhost:5173/" target="_blank">
                  查看
                </Link>
              ),
            },
            {
              key: 'github',
              label: 'GitHub',
              children: (
                <Link
                  href="https://github.com/liangjiayu/react-admin-vite"
                  target="_blank"
                >
                  查看
                </Link>
              ),
            },
          ]}
          styles={{
            label: {
              width: '15%',
            },
          }}
          className="ui-table-fixed"
        />
      </Card>
      <Card title="生产依赖">
        <Descriptions
          items={objToDescItems(__APP_INFO__.pkg.dependencies)}
          bordered
          styles={{
            label: {
              width: '15%',
            },
          }}
          className="ui-table-fixed"
        />
      </Card>
      <Card title="开发依赖">
        <Descriptions
          items={objToDescItems(__APP_INFO__.pkg.devDependencies)}
          bordered
          styles={{
            label: {
              width: '15%',
            },
          }}
          className="ui-table-fixed"
        />
      </Card>
    </div>
  );
};

export default Home;
