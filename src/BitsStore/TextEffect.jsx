import React from "react";
import ShinyText from "./ShinyText";

const TextEffect = () => {
  return (
    <ShinyText
      text="What I Do?"
      speed={2}
      delay={0}
      // color="#b5b5b5"
      color="#b5b5b59f"
      shineColor="#ffffff"
      spread={120}
      direction="left"
      yoyo={false}
      pauseOnHover={false}
      disabled={false}
      // 
      className="text-4xl md:text-5xl font-bold tracking-wide"
    />
  );
};

export default TextEffect;
