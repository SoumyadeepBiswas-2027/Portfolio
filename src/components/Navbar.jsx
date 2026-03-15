import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50
      backdrop-blur-xl bg-white/10 border border-white/20 
      rounded-full px-20 py-2">
        
      <ul className="flex items-center gap-16 text-gray-300 text-lg tracking-wide">
        <NavLink to="/" className="flex flex-col items-center hover:text-white">
          {({ isActive }) => (
            <>
              Home
              <span
                className={`w-2 h-2 mt-1 rounded-full bg-lime-400 transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/projects"
          className="flex flex-col items-center hover:text-white"
        >
          {({ isActive }) => (
            <>
              Projects
              <span
                className={`w-2 h-2 mt-1 rounded-full bg-lime-400 transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center hover:text-white"
        >
          {({ isActive }) => (
            <>
              Contact
              <span
                className={`w-2 h-2 mt-1 rounded-full bg-lime-400 transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
            </>
          )}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
