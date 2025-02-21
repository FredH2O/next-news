import Particles from "@/components/Particles";
import TrueFocus from "@/components/TrueFocus";

export default function Home() {
  return (
    <section className="h-screen overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <TrueFocus
          sentence="Next News"
          manualMode={false}
          blurAmount={5}
          borderColor="blue"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>

      <div className="inset-0 -z-10 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={5}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </section>
  );
}
