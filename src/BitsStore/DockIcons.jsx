import React from "react";
import Dock from "./Dock";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { href } from "react-router";

const DockIcons = () => {
  const items = [
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/SoumyadeepBiswas-2027", "_blank"),
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/soumyadeep-biswas-53a5b8293/",
          "_blank",
        ),
    },

  {
  icon: <SiGmail size={18} />,
  label: "Gmail",
  onClick: () =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=soumyadeepbiswas2027@gmail.com",
      "_blank"
    ),
},

    {
      icon: <FaXTwitter size={18} />,
      label: "Twitter",
      onClick: () => window.open("https://x.com/Soumyadeep58881", "_blank"),
    },
  ];
  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
  );
};

export default DockIcons;
