import { Card, Descriptions } from 'antd';

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

export const handle = {
  name: '首页',
};
