import { Card } from 'antd';

const TwCase = () => {
  return (
    <Card title="tailwind案例">
      <div className="m-auto grid max-w-[1560px] grid-cols-4 gap-4 min-[1600px]:grid-cols-5">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div className="relative" key={index}>
              <div className="rounded-[6px] bg-gray-500 pt-[58%]" />
              <div className="mt-2 line-clamp-2 cursor-pointer font-medium text-[15px] hover:text-blue-600 ">
                “潮州沙茶酱的由来？”截自耀盛金葫芦创始人2021年首次接受CCTV-4《美食中国》栏目组的邀请参与拍摄的〈潮州一菜一碟〉节目片段
              </div>
              <div className="mt-1 flex gap-2 text-[13px] text-gray-400">
                <div>记录生活的蛋黄派</div>
                <div> · </div>
                <div>2023-07-18</div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default TwCase;
