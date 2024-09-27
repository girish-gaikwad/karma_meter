import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import "./donutgraph.css";
import arrow from "../../assets/arrow.png";
Chart.register(ArcElement, Tooltip, Legend);

const CarbonFootprintChart = () => {
  const data = {
    labels: ["Commute", "Food", "Appliances"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#F58E27", "#F4646E", "#4AC596"],
        hoverBackgroundColor: ["#FF8B1F", "#FF5E58", "#00C48C"],
        borderWidth: 0,
        cutout: "90%",
        rotation: -85,
        circumference: 170,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="carbon-chart-container">
      <div className="chart-title">
        <h4>Your annual carbon footprint</h4>
      </div>

      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />

        <div className="chart-inner-text">
          <h3 className="carbon-value">18 ton CO₂</h3>
        </div>
      </div>

      <div className="legend-container">
        <div className="legend-item">
          <span className="legend-color commute-color"></span>
          <span>Commute</span>
        </div>
        <div className="legend-item">
          <span className="legend-color food-color"></span>
          <span>Food</span>
        </div>
        <div className="legend-item">
          <span className="legend-color appliances-color"></span>
          <span>Appliances</span>
        </div>
      </div>

      <div className="message-box">
        <img src={arrow} alt="arrow" className="message-icon" />

        <span className="message-text">Which is 25% higher than average</span>
      </div>
    </div>
  );
};

export default CarbonFootprintChart;
