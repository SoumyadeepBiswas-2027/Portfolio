// import RotateProject from "@/BitsStore/RotateProject";
// import ScrollProjects from "../BitsStore/ScrollProjects";
// import React from "react";

// const Projects = () => {
//   return (
//     <>
//      <h1>My</h1><RotateProject/>
//     <div >
//       <ScrollProjects />
//     </div>
//     </>
//   );
// };

// export default Projects;

// import RotateProject from "@/BitsStore/RotateProject";
// import ScrollProjects from "../BitsStore/ScrollProjects";
// import React from "react";

// const Projects = () => {
//   return (
//     <>
//       {/* Title Section */}
//       <div className="pl-12 sm:pl-16 md:pl-24 mt-6">
//         <div className="flex items-center gap-3">
//           <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-none">
//             My
//           </h1>
//           <RotateProject />
//         </div>
//       </div>

//       <div className="mt-8 px-12 sm:px-16 md:px-24">
//         <ScrollProjects />
//       </div>
//     </>
//   );
// };

// export default Projects;

import RotateProject from "@/BitsStore/RotateProject";
import ScrollProjects from "../BitsStore/ScrollProjects";
import React from "react";

const Projects = () => {
  return (
    <>
      {/* Title Section */}
      <div className="pl-12 sm:pl-16 md:pl-24 mt-6">
        <div className="flex items-center gap-3">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-none">
            My
          </h1>
          <RotateProject />
        </div>
      </div>

      {/* Cards Section (FULL WIDTH) */}
      <div className="mt-9 ">
        <ScrollProjects />
      </div>
    </>
  );
};

export default Projects;
