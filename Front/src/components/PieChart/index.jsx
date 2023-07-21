import React from "react";
import { Line } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
          
            title: {
              display: true,
              text: "Cotizacion Anual Dolar Oficial"
            }
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
export default PieChart;