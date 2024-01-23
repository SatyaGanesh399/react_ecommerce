import React, { ReactComponentElement } from "react";
import "./index.scss";

type ServiceProps = {
  iconComp: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  heading: string;
  subHeading: string;
};

function service({ iconComp, heading, subHeading }: ServiceProps) {
  return (
    <div className="d-flex align-items-center justify-content-between gap-10 services-each-tab">
      <div className="service-icon">{iconComp}</div>
      <div className="d-flex align-items-start flex-column">
        <span className="services-heading">{heading}</span>
        <span className="services-subHeading">{subHeading}</span>
      </div>
    </div>
  );
}

export default service;
