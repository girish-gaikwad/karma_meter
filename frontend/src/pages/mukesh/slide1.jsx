import React from "react";
import "./slide1.css";
import tree from '../../assets/m-tree.png'
import CarbonFootprintChart from "../../components/mukesh/donutgraph";
function Slide1() {
  return (
    <div className="m-main1">
      <h3>Summary</h3>
      <div className="m-box1">
      <div className="m-sub-box1">
        <CarbonFootprintChart/>
      </div>

        <div className="m-sub-box2">
          <div className="tree-icon">
            <img src={tree} alt="Tree Icon" />
          </div>
          <div className="offset-text">
            <p>Offset your excess carbon footprint by</p>
            <h2>Planting 15 Saplings</h2>
          </div>
          <button className="offset-button">Plant now to offset</button>
        </div>
        <div className="m-remain"><span>Remaind me Later</span></div>
      </div>
    </div>
  );
}

export default Slide1;
