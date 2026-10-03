import { useState } from "react";
import Slider from "../components/shareds/slider.shared";
import { CHAR_OPTIONS } from "../constants/options.constant";
import AsciiRenderMain from "../components/AsciiRenderMain";
import Floor from "../components/shareds/floor.shared";
import TitleHeader from "../components/shareds/title-header.shared";

const ShowcasePage = () => {
  const [activeChar, setActiveChar] = useState<"girl" | "cat">("girl");

  return (
    <div className="relative min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center py-12 px-4">
      <Floor />

      <div className="relative flex w-full max-w-5xl items-center gap-10">
        <div className="w-full max-w-md bg-black rounded-t-xl p-6 flex justify-center items-center overflow-hidden">
          <AsciiRenderMain activeChar={activeChar} />
        </div>

        <div className="flex items-start flex-col">
          <TitleHeader
            title="Viewer"
            subtitle="Slide to change model for rendering"
          />

          <Slider
            options={CHAR_OPTIONS}
            activeId={activeChar}
            onChange={(id) => setActiveChar(id as "girl" | "cat")}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowcasePage;
