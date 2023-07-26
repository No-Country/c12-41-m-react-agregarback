import React from "react";
import { Line } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container h-[500px]">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {

            title: {
              display: true,
              text: "Cotizacion Anual Dolar"
            }
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default PieChart;