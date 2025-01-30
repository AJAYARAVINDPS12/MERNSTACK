import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
} from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = ({ employees }) => {
  const attendanceData = employees.reduce(
    (acc, emp) => {
      acc[emp.status] = (acc[emp.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = {
    labels: Object.keys(attendanceData),
    datasets: [
      {
        label: "Attendance",
        data: Object.values(attendanceData),
        backgroundColor: ["#4CAF50", "#F44336", "#FF9800"],
      },
    ],
  };

  return (
    <div>
      <h2>Attendance Distribution</h2>
      <Pie data={data} />
    </div>
  );
};

export default AttendanceChart;
