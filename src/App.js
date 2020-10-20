import { Typography } from "antd";
import React, { useState } from "react";
import Auditoria from "./Auditoria";
import Results from "./Results";
import Setup from "./Setup";

function App() {
  const [workflow, setWorkflow] = useState("setup");
  const [data, setData] = useState([]);

  const handleWorkflowChange = (newWorkflowStatus) => {
    setWorkflow(newWorkflowStatus);
  };

  const handleDataChange = (newData) => {
    setData(newData);
  };

  const renderWorkflow = () => {
    if (workflow === "setup") {
      return (
        <Setup
          onWorkflowChange={handleWorkflowChange}
          onDataChange={handleDataChange}
        />
      );
    } else if (workflow === "Auditoria") {
      return (
        <Auditoria
          originalData={data}
          onWorkflowChange={handleWorkflowChange}
          onDataChange={handleDataChange}
        />
      );
    } else if (workflow === "Resultado") {
      return <Results originalData={data} />;
    }
  };

  return (
    <div className="App">
      <Typography.Title level={2}>Auditoria Ftec</Typography.Title>
      {renderWorkflow()}
    </div>
  );
}

export default App;
