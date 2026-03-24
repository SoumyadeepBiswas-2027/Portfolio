// import RotateProject from "@/BitsStore/RotateProject";
// import React from "react";
// import BentoProjects from "../BitsStore/BentoProjects";

// const Projects = () => {
//   return (
//     <>
//       {/* Title — same maxWidth + padding as bento-grid so left edges align */}
//       <div
//         style={{
//           maxWidth: "1100px",
//           margin: "0 auto",
//           padding: "0 32px",
//           boxSizing: "border-box",
//         }}
//         className="mt-10 mb-16"
//       >
//         <div className="flex items-center gap-3">
//           <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-none">
//             My
//           </h1>
//           <RotateProject />
//         </div>
//       </div>

//       {/* Cards */}
//       <BentoProjects />
//     </>
//   );
// };

// export default Projects;


import RotateProject from "@/BitsStore/RotateProject";
import React from "react";
import BentoProjects from "../BitsStore/BentoProjects";

const Projects = () => {
  return (
    <>
      {/* Title */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 64px auto",
          padding: "0 32px",
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-center gap-3">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-none">
            My
          </h1>
          <RotateProject />
        </div>
      </div>

      {/* Cards */}
      <BentoProjects />
    </>
  );
};

export default Projects;