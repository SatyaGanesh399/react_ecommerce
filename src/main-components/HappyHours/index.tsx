import React from "react";
import "./index.scss";
import { Button } from "antd";

function index() {
  return (
    <div className="happy-hours-container m-auto d-flex align-items-center justify-content-evenly green-gradient border-radius-20 padding-20">
      <div className="happy-hours-left d-flex align-items-start justify-content-start flex-column margin-20 w-40 m-auto">
        <span className="happy-left-text1">20% OFF</span>
        <span className="happy-left-text2">HAPPY</span>
        <span className="happy-left-text2">HOURS</span>
        <span className="happy-left-text3">15 Nov To 15 Dec</span>
        <img
          src="smartwatch1.png"
          alt="object-image"
          className="happy-hours-image"
        />
      </div>
      <div className="happy-hours-right d-flex align-items-start justify-content-start flex-column margin-20 w-40 m-auto">
        <span className="happy-right-text1">Beats Solo Air</span>
        <span className="happy-right-text2">Summer Sale</span>
        <span className="happy-right-text3">
          Company that grown from 270 to 480 employees in the last 12 months
        </span>
        <Button size="large" shape="round" className="happpy-hours-button">
          Shop
        </Button>
      </div>
    </div>
  );
}

export default index;
