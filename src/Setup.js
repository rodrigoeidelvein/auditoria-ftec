import React, { useState } from "react";
import { Button, Col, Divider, Input, Row, Select, Typography } from "antd";
import { List } from "antd";
import defaultData from "./defaultData";

const { Option } = Select;

const Setup = (props) => {
  const programs = [
    { id: 1, name: "Auditoria de Acesso" },
    { id: 2, name: "Auditoria de Operação do Computador" },
    { id: 3, name: "Auditoria de controles de Suporte Técnico" },
    { id: 4, name: "Auditoria de Sistemas Aplicativos" },
    {
      id: 5,
      name: "Auditoria de plano de Contingência e de Recuperação de desastres",
    },
    { id: 6, name: "Auditoria de Redes de Computadores" },
  ];

  const [value, setValue] = useState("");
  const [program, setProgram] = useState("");
  const [data, setData] = useState([]);

  const handleInit = () => {
    props.onWorkflowChange("Auditoria");
  };

  const handleAdd = () => {
    if (!value || !program) {
      return;
    }

    setData((data) => [...data, { value, program, status: false }]);
    props.onDataChange(data);
  };

  const renderLists = () => {
    if (!data) {
      return <div></div>;
    }

    const uniquePrograms = [...new Set(data.map((item) => item.program))];
    return (
      <Row>
        <Col span={24}>
          {uniquePrograms.map((program) => {
            return (
              <>
                <List
                  key={program}
                  header={
                    <Typography.Title level={4}>{program}</Typography.Title>
                  }
                  dataSource={filterData(program)}
                  renderItem={(item) => (
                    <List.Item key={item.value}>
                      <Typography.Text>{item.value}</Typography.Text>
                    </List.Item>
                  )}
                />
                <Divider />
              </>
            );
          })}
        </Col>
      </Row>
    );
  };

  const filterData = (program) => {
    console.log(data.filter((item) => item.program === program));
    return data.filter((item) => item.program === program);
  };

  const loadDefaultData = () => {
    setData(defaultData);
    props.onDataChange(defaultData);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Select
            style={{ width: "100%" }}
            onChange={(program) => setProgram(program)}
          >
            {programs.map((item) => {
              return (
                <Option key={item.id} value={item.name}>
                  {item.name}
                </Option>
              );
            })}
          </Select>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Input
            allowClear
            placeholder="Descrição do item"
            onChange={(e) => setValue(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Button block onClick={() => loadDefaultData()}>
            Carregar padrão
          </Button>
        </Col>
        <Col span={12}>
          <Button block type="primary" onClick={() => handleAdd()}>
            Adicionar
          </Button>
        </Col>
      </Row>
      <Divider />
      {renderLists()}
      <Button block type="primary" onClick={() => handleInit()}>
        Iniciar auditoria
      </Button>
    </>
  );
};

export default Setup;
