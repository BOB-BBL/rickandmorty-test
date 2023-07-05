"use client";

import { useState } from "react";

interface ITextArea {
  initial?: string;
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<ITextArea> = ({
  initial,
  label,
  placeholder,
  onChange,
}) => {
  const [val, setVal] = useState(initial || "");
  return (
    <label className="flex flex-col w-full">
      {label}
      <textarea
        placeholder={placeholder}
        className="w-full px-1 bg-slate-100 text-blue-500"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          if (onChange) onChange(e);
        }}
      />
    </label>
  );
};

export default Textarea;
