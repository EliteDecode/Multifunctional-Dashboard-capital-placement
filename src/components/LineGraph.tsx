import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  Tooltip: true,

  scales: {
    x: {
      display: true,

      title: {
        display: false,
        text: "Month",
      },
    },
    y: {
      display: true,
      title: {
        display: false,
        text: "Elevation (meters)",
      },

      min: 0, // Customize the minimum elevation
      max: 1000, // Customize the maximum elevation
    },
  },

  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const qualifiedData: number[] = [600, 305, 390, 600, 460, 812, 651]; // Replace with your qualified data points
const disqualifiedData: number[] = [560, 460, 300, 500, 230, 962, 421]; // Replace with your disqualified data points

const data = {
  labels,
  datasets: [
    {
      label: "Qualified",
      data: qualifiedData,
      borderColor: "rgba(251, 227, 142, 0.9)",
      backgroundColor: "#FBE38E",
    },
    {
      label: "Disqualified",
      data: disqualifiedData,
      borderColor: "#9A89FF",
      backgroundColor: "#B1A5FF",
    },
  ],
};

const LineGraph: React.FC = () => {
  return <Line options={options} data={data} />;
};

export default LineGraph;
