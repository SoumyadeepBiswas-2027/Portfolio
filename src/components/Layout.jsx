import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import { Contact } from "lucide-react";
// import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"></div>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20"></div>
      <section id="contact"><Contact/></section>
    </>
  );
};

export default Layout;
