import React from "react";
import "./index.scss";

type SponserProps = {
  id: number;
  imageUrl: string;
};
function Sponser({ id, imageUrl }: SponserProps) {
  return (
    <div key={id}>
      <img src={imageUrl} className="sponsers-image" />
    </div>
  );
}

export default Sponser;
