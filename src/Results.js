import React from "react";

const Results = ({ originalData }) => {
  const uniquePrograms = [...new Set(originalData.map((item) => item.program))];
  return (
    <>
      <div>Auditoria finalizada! Confira os resultados</div>
    </>
  );
};

export default Results;
