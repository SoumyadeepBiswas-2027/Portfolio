// import React, { useState } from "react";

// const Navbar = () => {
//   const [active, setActive] = useState("home");

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setActive(id);
//   };

//   return (
//     <nav
//       className="fixed top-6 left-1/2 -translate-x-1/2 z-50
//       backdrop-blur-xl bg-white/10 border border-white/20
//       rounded-full px-20 py-2"
//     >
//       <ul className="flex items-center gap-16 text-gray-300 text-lg tracking-wide">
//         {["home", "projects", "contact"].map((section) => (
//           <li
//             key={section}
//             onClick={() => scrollToSection(section)}
//             className="flex flex-col items-center hover:text-white cursor-pointer"
//           >
//             {section.charAt(0).toUpperCase() + section.slice(1)}
//             <span
//               className={`w-2 h-2 mt-1 rounded-full bg-lime-400 transition-all duration-300 ${
//                 active === section
//                   ? "opacity-100 scale-100"
//                   : "opacity-0 scale-0"
//               }`}
//             />
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  // 👇 This watches which section is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id); // updates dot to visible section
          }
        });
      },
      { threshold: 0.5 }, // section must be 50% visible to trigger
    );

    // 👇 Tell the observer to watch all 3 sections
    ["home", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 👇 Cleanup when component unmounts
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
      backdrop-blur-xl bg-white/10 border border-white/20 
      rounded-full px-20 py-2"
    >
      <ul className="flex items-center gap-16 text-gray-300 text-lg tracking-wide">
        {["home", "projects", "contact"].map((section) => (
          <li
            key={section}
            onClick={() => scrollToSection(section)}
            className="flex flex-col items-center hover:text-white cursor-pointer"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span
              className={`w-2 h-2 mt-1 rounded-full bg-lime-400 transition-all duration-300 ${
                active === section
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;



//  What `IntersectionObserver` does in plain English```
// Browser constantly watches all 3 sections
//   → When a section becomes 50% visible on screen
//     → entry.isIntersecting becomes true
//       → setActive(entry.target.id) runs
//         → dot moves to that section ✅
