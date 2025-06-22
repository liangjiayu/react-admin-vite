import { ProTable, type ProColumns } from "@ant-design/pro-components";
import ApiService from "@/service/api";

const TableList = () => {
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: "规则名称",
      dataIndex: "name",
    },
    {
      title: "描述",
      dataIndex: "desc",
    },
    {
      title: "服务调用次数",
    },
    {
      title: "状态",
    },
    {
      title: "上次调度时间",
    },
    {
      title: "操作",
    },
  ];

  return (
    <>
      <ProTable<API.RuleListItem>
        columns={columns}
        request={async () => {
          const data = await ApiService.rule.rule({ current: 1, pageSize: 20 });
          return {
            list: data.data,
            total: data.total,
          };
        }}
      />
    </>
  );
};

export default TableList;
