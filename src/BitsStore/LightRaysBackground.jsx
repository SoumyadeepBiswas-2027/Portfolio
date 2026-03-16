import React from "react";

const LightRaysBackground = () => {
  return (
    <LightRays
      raysOrigin="top-center"
      raysColor="#ffffff"
      raysSpeed={1}
      lightSpread={0.5}
      rayLength={3}
      followMouse={true}
    />
  );
};

export default LightRaysBackground;
