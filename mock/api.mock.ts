import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock([
  {
    url: "/api/rule",
    method: "GET",
    body: {
      data: [
        {
          key: 99,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
          name: "TradeCode 99",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 503,
          status: "0",
          updatedAt: "2022-12-06T05:00:57.040Z",
          createdAt: "2022-12-06T05:00:57.040Z",
          progress: 81,
        },
        {
          key: 98,
          disabled: false,
          href: "https://ant.design",
          avatar:
            "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
          name: "TradeCode 98",
          owner: "曲丽丽",
          desc: "这是一段描述",
          callNo: 164,
          status: "0",
          updatedAt: "2022-12-06T05:00:57.040Z",
          createdAt: "2022-12-06T05:00:57.040Z",
          progress: 12,
        },
      ],
    },
  },
]);
