import React from "react";
import { RadialChart } from "react-vis";

const Results = ({ originalData }) => {
  const uniquePrograms = [...new Set(originalData.map((item) => item.program))];

  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  let percentageByProgram = uniquePrograms.map((program) => {
    const totalQuestionsByProgram = originalData.filter(
      (question) => question.program === program
    );

    const correctQuestionsByProgram = totalQuestionsByProgram.filter(
      (question) => question.status
    );

    return {
      label: program,
      angle: percentage(
        correctQuestionsByProgram.length,
        totalQuestionsByProgram.length
      ),
    };
  });

  percentageByProgram = percentageByProgram.filter((program) => program.angle);

  const renderCharts = () => {
    return (
      <div>
        <RadialChart
          data={percentageByProgram}
          width={350}
          height={350}
          labelsRadiusMultiplier={1.1}
          labelsStyle={{
            fontSize: 12,
          }}
          showLabels
        />
      </div>
    );
  };

  return (
    <>
      <div>Auditoria finalizada! Confira os resultados</div>
      {percentageByProgram.map((program) => {
        return (
          <div>
            {program.label}: {program.angle.toFixed(2)}% completo
          </div>
        );
      })}
      {percentageByProgram.length > 1 && renderCharts()}
    </>
  );
};

export default Results;
