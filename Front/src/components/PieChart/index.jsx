import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function PieChart({ chartData }) {
  const [aspectRatio, setAspectRatio] = useState(4/5);

  const handleWindowResize = () => {
    if (window.innerWidth <= 640) {
      setAspectRatio(4/5);
    } 
    if (window.innerWidth >= 640)  {
      setAspectRatio(3/2);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    handleWindowResize()
  }, [])
  

  return (
    <div  className="chart-container h-[50vh] relative flex justify-center items-center mx-auto">
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
          
            title: {
              display: true,
              text: "Cotizacion Anual Dolar",
            },
          },
          maintainAspectRatio:true,
          aspectRatio: aspectRatio
        }}
      />
    </div>
  );
}
export default PieChart;
