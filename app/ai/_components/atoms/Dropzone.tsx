"use client";

import RDZ from "react-dropzone";

const Dropzone: React.FC = () => {
  return (
    <RDZ onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div
            {...getRootProps()}
            className="flex border-dashed justify-center border-2 border-white box-border rounded-md py-5 px-5 cursor-pointer"
          >
            <input
              {...getInputProps()}
              id="fileInput"
              type="file"
              name="file"
            />
            <div className="flex flex-col justify-center items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500 border-blue-500 border-2 rounded-full p-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Upload or drag and drop your image here</p>
            </div>
          </div>
        </section>
      )}
    </RDZ>
  );
};

export default Dropzone;
