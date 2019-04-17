import React from "react";
import Tilt from "react-tilt";
import camera from "./camera.png";
import "./logo.css";

const Logo = () => (
  <div className="ma4mt0">
    <Tilt
      className="Tilt br2 shadow-2"
      options={{ max: 100 }}
      style={{ height: 150, width: 150 }}
    >
      <div className="Tilt-inner pa-3">
        <img src={camera} alt="Camera Logo" />
      </div>
    </Tilt>
  </div>
);

export default Logo;
