import React from "react";
import Service from "./service";
import "./index.scss";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineCheckCircle } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { RiSecurePaymentFill } from "react-icons/ri";

let service_obj = [
  {
    iconName: <FaShippingFast />,
    heading: "Free Shipping",
    subHeading: "Free shopping on all orders",
  },
  {
    iconName: <MdOutlineCheckCircle />,
    heading: "Money Guarantee",
    subHeading: "30 day Money back",
  },
  {
    iconName: <SlEarphones />,
    heading: "Online Support 24/7",
    subHeading: "Technical Support 24/7",
  },
  {
    iconName: <RiSecurePaymentFill />,
    heading: "Secure Payment",
    subHeading: "All Cards Accepted",
  },
];

function index() {
  return (
    <div
      className="d-flex align-items-center justify-content-between w-80 flex-wrap service-tabs"
      style={{ margin: "20px auto" }}
    >
      {service_obj.map((item) => (
        <Service
          iconComp={item.iconName}
          heading={item.heading}
          subHeading={item.subHeading}
        />
      ))}
    </div>
  );
}

export default index;
