import { ProTable, type ProColumns } from "@ant-design/pro-components";

const TableList = () => {
  const columns: ProColumns[] = [
    {
      title: "规则名称",
    },
    {
      title: "描述",
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
      <ProTable columns={columns} />
    </>
  );
};

export default TableList;
