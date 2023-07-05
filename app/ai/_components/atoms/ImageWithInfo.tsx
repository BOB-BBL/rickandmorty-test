"use client";

import { ImageProps } from "next/image";
import { useState } from "react";

const ImageWithInfo: React.FC<ImageProps> = ({
  alt = "generated image",
  ...rest
}) => {
  const [infoOpen, setInfoOpen] = useState(false);
  return (
    <div className="relative">
      <img alt={alt} {...rest} />
      <button
        className="absolute bottom-5 right-5 h-8 w-8 border-2 border-orange-500 rounded-full font-bold"
        onClick={() => setInfoOpen(!infoOpen)}
      >
        i
      </button>
      {infoOpen && (
        <>
          <div className="absolute bottom-[64px] right-5 bg-slate-800 grid w-80 min-h-[500px] p-5 rounded-md">
            <div>Dimensions: 800x512 px</div>
            <div>
              <p>Prompt:</p>
              <div className="w-full flex justify-between border-slate-400 border-2 px-2 gap-x-2 rounded-md">
                <p>a cat in a hat with blue shoes</p>
                <button>copy</button>
              </div>
              <p>Negative prompt:</p>
              <div className="w-full flex justify-between border-slate-400 border-2 px-2 gap-x-2 rounded-md">
                <p>not a cat in a hat with blue shoes</p>
                <button>copy</button>
              </div>
            </div>
            <div>LorA</div>
            <div>Sampler</div>
            <div>Checkpoint</div>
          </div>
          {/* <div className="absolute bottom-[64px] right-[24px] bg-slate-800 w-6 h-6 rotate-45" /> */}
        </>
      )}
    </div>
  );
};

export default ImageWithInfo;
