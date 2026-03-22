// import CircularGallery from "./CircularGallery";
// import React from "react";

// const ScrollProjects = () => {
//   return (
//     <div style={{ height: "600px", position: "relative" }}>
//       <CircularGallery
//         bend={3}
//         textColor="#ffffff"
//         borderRadius={0.05}
//         scrollEase={0.02}
//         bend={1}
//         borderRadius={0.05}
//         scrollSpeed={2}
//         scrollEase={0.05}
//       />
//     </div>
//   );
// };

//export default ScrollProjects;

import CircularGallery from "./CircularGallery";
import React from "react";

const ScrollProjects = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        bend={1} // keep only one
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05} // keep only one
      />
    </div>
  );
};

export default ScrollProjects;
