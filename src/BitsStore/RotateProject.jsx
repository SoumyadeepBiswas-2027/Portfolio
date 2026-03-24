import React from "react";
import RotatingText from "./RotatingText";

const RotateProject = () => {
  return (
    <>
      <RotatingText
        texts={["Projects", "Solutions", "Builds", "Creations!"]}
        mainClassName="inline-flex items-center justify-center bg-white/10 text-white font-extrabold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15),0_0_40px_rgba(255,255,255,0.1)] overflow-hidden text-3xl sm:text-4xl md:text-5xl leading-none"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </>
  );
};

export default RotateProject;
