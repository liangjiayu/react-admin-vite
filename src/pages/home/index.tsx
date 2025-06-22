import { Button } from "antd";
import ApiService from "@/service/api";
import { useMount } from "ahooks";
import request from "@/utils/request";

const Home = () => {
  useMount(() => {
    request("/api/rule", { method: "GET" }).then((res) => {
      console.log("aaa", res);
    });
    // ApiService.rule.rule({ current: 1, pageSize: 20 }).then((res) => {
    //   console.log(res);
    // });
  });

  return (
    <div className="p-[20px]">
      <Button type="primary">Primary Button</Button>
    </div>
  );
};

export default Home;
