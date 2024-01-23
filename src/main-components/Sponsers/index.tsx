import React from "react";
import "./index.scss";
import Sponser from "./sponser";

const SponsersList = [
  {
    id: 1,
    imageUrl: "sony.png",
  },
  {
    id: 2,
    imageUrl: "Samasung.png",
  },
  {
    id: 3,
    imageUrl: "beats.png",
  },
  {
    id: 4,
    imageUrl: "gibson.png",
  },
  {
    id: 5,
    imageUrl: "sony.png",
  },
];

function index() {
  return (
    <div className="sponsers-container white-gradient d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-between w-90 flex-wrap">
        {SponsersList.map((item) => {
          return <Sponser id={item.id} imageUrl={item.imageUrl} />;
        })}
      </div>
    </div>
  );
}

export default index;
