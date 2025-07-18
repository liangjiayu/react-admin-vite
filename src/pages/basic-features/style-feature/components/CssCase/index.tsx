import { Card } from 'antd';
import './index.less';

const CssCase = () => {
  return (
    <Card title="原生css方案">
      <div className="css-case-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="grid-item" key={index}>
            <div className="thumbnail" />
            <div className="title">
              “潮州沙茶酱的由来？”截自耀盛金葫芦创始人2021年首次接受CCTV-4《美食中国》栏目组的邀请参与拍摄的〈潮州一菜一碟〉节目片段
            </div>
            <div className="meta-info">
              <div>记录生活的蛋黄派</div>
              <div> · </div>
              <div>2023-07-18</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CssCase;
