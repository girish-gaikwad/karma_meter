import React from "react";
import "./slide2.css";
import bg1m from "../../assets/m-bg1.svg";
import r1 from "../../assets/m-row1.png";
import r2 from "../../assets/m-row2.png";
import r3 from "../../assets/m-row3.png";
function Slide2() {
  return (
    <div className="m-main">
      <div className="m-head-text">
        <span>Know & offset your carbon footprints!</span>
      </div>
      <div className="m-box">
        <div className="m-row1">
          <div className="m-img-part">
            <img src={r1} style={{backgroundColor:'#FFF5F3'}} alt="Answer our questions" />
          </div>
          <div className="m-row-cont">
            <p className="m-title">Answer our questions</p>
            <span className="m-desc">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>
        <div className="m-row1">
          <div className="m-img-part">
            <img src={r2} style={{backgroundColor:'#FFF7E8'}} alt="Know your carbon footprint" />
          </div>
          <div className="m-row-cont">
            <p className="m-title">Know your carbon footprint</p>
            <span className="m-desc">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>
        <div className="m-row1">
          <div className="m-img-part">
            <img  style={{backgroundColor:'#FFF5F3'}} src={r3} alt="Offset it by following the instructions" />
          </div>
          <div className="m-row-cont">
            <p className="m-title">Offset it by following the instructions</p>
            <span className="m-desc">
              Vestibulum venenatis fringilla lorem eu finibus. Donec ac nulla
              nec nunc malesuada.
            </span>
          </div>
        </div>
        <div className="m-actions">
          <button className="m-btn m-btn-2">Later</button>
          <button className="m-btn m-btn-1">Calculate & offset</button>
        </div>
      </div>
    </div>
  );
}

export default Slide2;
