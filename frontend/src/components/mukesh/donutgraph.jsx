import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography } from "@mui/material";
import "./donutgraph.css"; // Your custom CSS file
import arrow from '../../assets/arrow.png';
Chart.register(ArcElement, Tooltip, Legend);

const CarbonFootprintChart = () => {
  const data = {
    labels: ["Commute", "Food", "Appliances"], // Labels still exist in the data, but won't be shown
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#FF8B1F", "#FF5E58", "#00C48C"],
        hoverBackgroundColor: ["#FF8B1F", "#FF5E58", "#00C48C"],
        borderWidth: 0,
        
        
        cutout: "90%", // The inner cutout for the doughnut
        rotation: -85,
        circumference: 170, // Ensures it's a semi-circle
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // This removes the default legend
      },
    },
    maintainAspectRatio: false, // Keeps the chart responsive
  };

  return (
    <div className="carbon-chart-container">
      <div className="chart-title">
        <h4>Your annual carbon footprint</h4>
      </div>
      {/* Graph is styled with MUI */}
      <Box className="chart-wrapper">
        <Doughnut data={data} options={options} />
        {/* "18 ton CO₂" text inside the doughnut graph */}
        <div className="chart-inner-text">
          <Typography variant="h6" className="carbon-value">
            18 ton CO₂
          </Typography>
        </div>
      </Box>

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
        {/* <span className="message-icon">📈</span> */}
        <span className="message-text">
          Which is 25% higher than average
        </span>
      </div>
    </div>
  );
};

export default CarbonFootprintChart;
