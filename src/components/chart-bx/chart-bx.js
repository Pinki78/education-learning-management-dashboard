import { Bar, Line, Doughnut, Radar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  LineElement, PointElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler, Tooltip, Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale,
  LineElement, PointElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler, Tooltip, Legend
);

// ✅ map type string to component
const chartComponents = {
  line: Line,
  bar: Bar,
  doughnut: Doughnut,
  pie: Pie,
  radar: Radar,
};

const ChartBx = props => {
    const {data, options, height, type } = props 
      const ChartComponent = chartComponents[type] || Line;
  return (
    <>
      <ChartComponent data={data} options={options} />
    
    </>
  )
}



export default ChartBx