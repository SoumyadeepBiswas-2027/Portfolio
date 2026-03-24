import React from "react";
import MagicBento from "./MagicBento";

const BentoProjects = () => {
  return (
    <>
      <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight={false} // cleaner look
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="255, 255, 255" // changed to white
        disableAnimations={false}
      />
    </>
  );
};

export default BentoProjects;
