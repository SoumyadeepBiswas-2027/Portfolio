import DockIcons from "../BitsStore/DockIcons";
import TextTypeStyle from "../BitsStore/TextTypeStyle";
import LogoLoopIcons from "../BitsStore/LogoLoopIcons";
import TextEffect from "@/BitsStore/TextEffect";
import Accordion from "../Tools/Accordion";
import LetterGlitchStyle from "@/BitsStore/LetterGlitchStyle";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 pt-45 px-16 md:px-24 lg:px-12 text-white text-left">
      <p className="text-3xl text-gray-400 tracking-widest uppercase mb-4">
        Hi, I'm Soumyadeep Biswas
      </p>
      <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
        <TextTypeStyle />
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mt-2">
        Transforming ideas into seamless, interactive web experiences.
      </p>
      <DockIcons />

      <div className="mt-20 opacity-80">
        <LogoLoopIcons />
      </div>

      {/* Two-column layout */}
      <div className="flex flex-row gap-8 mt-10 px-6 h-[400px]">
        <div className="flex flex-col justify-start w-1/2">
          <div className="pl-5">
            <TextEffect />
          </div>
          <Accordion />
        </div>
        <div className="w-1/2 h-[280px] self-start">
          <LetterGlitchStyle />
        </div>
      </div>
    </div>
  );
};

export default Home;
