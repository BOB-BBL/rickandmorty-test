import Section from "../_components/atoms/Section";
import ModelSelect from "../_components/organisms/ModelSelect";

const Create: React.FC = () => {
  return (
    <div className="flex w-full flex-col pb-10 gap-y-5 items-center">
      <div className="relative bg-slate-800 w-full">
        <div className="flex w-full z-[1]">
          <img
            className="w-full"
            alt="generated image"
            width={944}
            height={512}
            src="/create1.png"
          />
          {/* {Array(4)
            .fill(0)
            .map((img, i) => (
              <img
                alt="generated image"
                width={2048}
                height={2048}
                key={i}
                src="../create1.png"
              />
            ))} */}
        </div>
        <h1 className="absolute inset-0 flex justify-center items-center w-full z-[3] text-7xl text-blue-500 font-black">
          Create your image
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-[2]" />
      </div>
      <div className="max-w-7xl px-10 w-full">
        <Section className="" title="Choose model">
          <ModelSelect />
        </Section>
      </div>
    </div>
  );
};

export default Create;
