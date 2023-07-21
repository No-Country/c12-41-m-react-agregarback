import React, { useState } from 'react';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Data } from "../../utils/Data";
import PieChart from '../PieChart/index'
Chart.register(CategoryScale);
const ChartDolarOficial = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "Dolar Compra",
                data: Data.map((data) => data.dolarCompra, ),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "Black",
                borderWidth: 1,
            },
            {
                label: "Dolar Venta",
                data: Data.map((data) => data.dolarVenta),
                backgroundColor: [
                  "rgba(255, 99, 132, 1)",
                  "#bdc3c7",
                  "#34495e",
                  "#f39c12",
                  "#3498db",
                ],
                borderColor: "black",
                borderWidth: 1,
              },
            
        ],
        
        
    });


    return (
        <div className="chart-container">
            <PieChart chartData={chartData} />
        </div>
    );
};

export default ChartDolarOficial;
