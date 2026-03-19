import LogoLoop from './LogoLoop';
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiRedux,
} from 'react-icons/si';
import {
  DiJava,   // Java — from Devicons, reliably available
  DiCss3,   // CSS3 — fallback if SiCss also fails
} from 'react-icons/di';
import { TbLetterC } from 'react-icons/tb';

const techLogos = [
  { node: <SiReact />,       title: "React",       href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS",href: "https://tailwindcss.com" },
  { node: <DiJava />,        title: "Java",        href: "https://www.java.com" },
  { node: <SiFirebase />,    title: "Firebase",    href: "https://firebase.google.com" },
  { node: <SiHtml5 />,       title: "HTML5",       href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <DiCss3 />,        title: "CSS3",        href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />,  title: "JavaScript",  href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiMysql />,       title: "MySQL",       href: "https://www.mysql.com" },
  { node: <SiRedux />,       title: "Redux",       href: "https://redux.js.org" },
  { node: <TbLetterC />,     title: "C",           href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
];

function LogoLoopIcons() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={46}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoLoopIcons;