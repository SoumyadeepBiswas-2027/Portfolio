import LetterGlitch from "./LetterGlitch";

const LetterGlitchStyle = () => {
  return (
    <div className="relative w-full h-full" style={{ mixBlendMode: 'screen', background: 'none' }}>
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={false}
        outerVignette={false}
        smooth={true}
        glitchColors={['#e6e2ee', '#c7c5cfa4', '#e3e4ee8a']}
      />
      {/* Soft edge fades using screen-compatible mask */}
      <div className="absolute inset-0 pointer-events-none" style={{
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />
    </div>
  );
};

export default LetterGlitchStyle;