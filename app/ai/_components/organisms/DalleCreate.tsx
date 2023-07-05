"use client";

import { useState } from "react";
import Textarea from "../Textarea";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const post = async (fullUrl: string, data: unknown, accessToken?: string) => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(fullUrl, options);
    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      console.error(message);
    }

    return response.json();
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
    }
    return error;
  }
};

interface IDalleImageResponse {
  created: number;
  data: {
    url: string;
  }[];
  message?: string;
}

const DalleCreate: React.FC = () => {
  const [apikey, setApikey] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [imagesLoading, setImagesLoading] = useState<boolean>(false);
  const [numImages, setNumImages] = useState<number>(1);
  const [error, setError] = useState<string>("");

  const handleCreateImage = async (apikey: string) => {
    setImagesLoading(true);
    setError("");
    const fullUrl = `https://api.openai.com/v1/images/generations`;
    const response: IDalleImageResponse = await post(
      fullUrl,
      {
        prompt,
        n: numImages,
        size: "512x512",
      },
      apikey
    );
    if (response?.message) setError(response.message as string);

    const imageurls = response.data.map((image) => image.url);
    setImages([...imageurls, ...images]);
    setImagesLoading(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex w-full gap-5">
        <div className="grid w-full">
          <Textarea
            label="Promt"
            placeholder="create prompt here"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="whitespace-nowrap">Prompt builder</div>
          <Button>Open</Button>
        </div>
      </div>

      <div className="grid gap-2">
        <h4>Number of images</h4>
        <div className="flex gap-x-2">
          {Array.from(Array(4).keys()).map((i) => (
            <button
              key={i}
              onClick={() => setNumImages(i + 1)}
              className={`bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 w-8 h-8 ${
                i + 1 === numImages ? "bg-blue-600" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Input
        onChange={(e) => setApikey(e.target.value)}
        label="apikey"
        type="password"
      />

      <Button onClick={() => handleCreateImage(apikey)}>Generate</Button>

      {error && <div>{error}</div>}
      {imagesLoading && <div>Fancy Loading...</div>}
      <div className="flex flex-wrap gap-5">
        {images.map((image) => (
          <img
            src={image}
            alt="generated image"
            key={image}
            className="w-[32rem] h-[32rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default DalleCreate;
