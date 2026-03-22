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
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact"><Contact/></section>
    </>
  );
};

export default Layout;
