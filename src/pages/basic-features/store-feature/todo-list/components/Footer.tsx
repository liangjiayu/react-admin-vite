import { Button, Radio } from 'antd';

const Footer = () => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span>还剩 5 件</span>
      <div>
        <Radio.Group>
          <Radio.Button value="a">全部</Radio.Button>
          <Radio.Button value="b">未完成</Radio.Button>
          <Radio.Button value="c">已完成</Radio.Button>
        </Radio.Group>
      </div>
      <Button size="small">清除已完成</Button>
    </div>
  );
};

export default Footer;
