import AsciiMascot from "../components/AsciiMascot";
import Button from "../components/shareds/button.shared";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col items-center justify-center p-8 gap-12 selection:bg-slate-900 selection:text-white">
      <div className="flex flex-col items-center justify-center">
        <div className=" flex items-center justify-center border border-black rounded-xl shadow-inner overflow-hidden relative">
          <AsciiMascot />
        </div>

        <Button to="/viewer">Open Viewer</Button>
      </div>

      <div className="max-w-2xl font-mono text-sm leading-relaxed">
        <h1 className="text-3xl font-bold tracking-tighter mb-8 uppercase  pb-2">
          Learning Basic 3D Shape Using ASCII as Based Shapes
        </h1>

        <div className="space-y-8">
          <article>
            This learning test renders basic 3D ASCII shapes by applying matrix
            transformations, surface normals, and directional lighting to custom
            geometric faces and vertices.{" "}
          </article>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
