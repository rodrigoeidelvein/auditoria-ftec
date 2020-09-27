import { Table, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

const Auditoria = ({ originalData, onDataChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(originalData);
    console.log(originalData);
  }, [originalData]);

  const handleChange = (checked, event, key) => {
    const question = data.find((item) => item.key === key);
    question.status = checked;
    setData((data) => [...data]);
    onDataChange(data);
  };

  const columns = [
    {
      title: "Pergunta",
      key: "value",
      dataIndex: "value",
      render: (text) => <span style={{ fontSize: "12px" }}>{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => {
        console.log(status);
        return (
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            checked={status}
            onChange={(checked, event) =>
              handleChange(checked, event, record.key)
            }
          />
        );
      },
    },
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default Auditoria;
