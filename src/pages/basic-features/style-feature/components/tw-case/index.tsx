import { Card } from 'antd';

const TwCase = () => {
  return (
    <Card title="tailwind案例">
      <div className="grid grid-cols-4 gap-4  m-auto min-[1600px]:grid-cols-5 max-w-[1560px]">
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div className="relative" key={index}>
              <div className="bg-gray-500 rounded-[6px] pt-[58%]" />
              <div className="text-[15px] line-clamp-2 font-medium mt-2 cursor-pointer hover:text-blue-600 ">
                “潮州沙茶酱的由来？”截自耀盛金葫芦创始人2021年首次接受CCTV-4《美食中国》栏目组的邀请参与拍摄的〈潮州一菜一碟〉节目片段
              </div>
              <div className="flex text-gray-400 text-[13px] gap-2 mt-1">
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
