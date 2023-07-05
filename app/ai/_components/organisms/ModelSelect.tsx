"use client";

import { useState } from "react";
import Button from "../atoms/Button";
import Link from "../atoms/Link";

const dalleInfo = (
  <>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
    <p>Dall-E is a txt2img diffusion model created by OpenAI</p>
  </>
);

const stableInfo = (
  <>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
    <p>Stable diffusion is an open-source diffusion model</p>
  </>
);

const ModelSelect: React.FC = () => {
  const [selected, setSelected] = useState<"dalle" | "stable">("dalle");
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="grid gap-5 w-full">
      <div className="flex w-full justify-center gap-5">
        <Button onClick={() => setSelected("dalle")}>Dall-E</Button>
        <Button onClick={() => setSelected("stable")}>Stable diffusion</Button>
      </div>
      <div className="text-center relative">
        <div className={`overflow-hidden pt-5 ${!expanded && "max-h-40"}`}>
          {selected === "dalle" && dalleInfo}
          {selected === "stable" && stableInfo}
        </div>
        {expanded && <div className="h-20" />}
        {!expanded && (
          <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-slate-900 z-[1]" />
        )}
        <div className="absolute flex bottom-0 w-full z-[2] h-20 items-center justify-center">
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? "Read less" : "Read more"}
          </Button>
        </div>
      </div>
      <Link
        className="w-fit justify-self-center"
        href={
          selected === "dalle"
            ? "/ai/create/dall-e"
            : "/ai/create/stable-diffusion"
        }
      >
        Go to creator
      </Link>
    </div>
  );
};

export default ModelSelect;
