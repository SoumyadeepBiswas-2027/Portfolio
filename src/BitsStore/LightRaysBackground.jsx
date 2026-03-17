import LightRays from "./LightRays";

const LightRaysBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
      />
    </div>
  );
};

export default LightRaysBackground;