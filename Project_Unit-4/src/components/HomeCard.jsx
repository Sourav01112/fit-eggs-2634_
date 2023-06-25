import React from "react";
import "../components/style/homepage.css";

export const HomeCard = ({ src }) => {
  // This is HomePage big boxes card
  return (
    <div className="homCardContainer">
      <img src={src} />
    </div>
  );
};
