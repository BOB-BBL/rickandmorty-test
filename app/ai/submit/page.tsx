import Button from "../_components/atoms/Button";
import Dropzone from "../_components/atoms/Dropzone";
import Section from "../_components/atoms/Section";
import Input from "../_components/atoms/Input";
import Timer from "../_components/atoms/Timer";

const SubmitPage: React.FC = () => {
  return (
    <div className="flex w-full flex-col pb-10">
      <Timer />
      <div className="grid gap-y-5">
        <div>
          <div className="relative bg-slate-800">
            <div className="flex w-full z-[1]">
              <img
                className="w-full"
                alt="generated image"
                width={944}
                height={512}
                src="/submit1.png"
              />
            </div>
            <h1 className="absolute inset-0 flex justify-center items-center w-full z-[3] text-7xl text-blue-500 font-black">
              Submit your image
            </h1>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 z-[2]" />
          </div>
        </div>
        <div>
          <h5 className="text-2xl font-bold text-center text-blue-500">
            week 1
          </h5>
        </div>
        <Section title="Rules">
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
          </ul>
        </Section>
        <Section title="Submit">
          <form className="flex flex-col gap-5 w-[min(48rem,100%)]">
            <Input type="text" label="Positive prompt used" />
            <Input type="text" label="Negative prompt used" />
            <div className="flex flex-wrap gap-5 w-full">
              <div className="flex flex-col gap-y-5 justify-center items-center grow">
                <Input type="text" label="Username" />
                <Input type="text" label="Model used" />
              </div>
              <div
                id="dropzone"
                className="flex flex-col items-center justify-center grow"
              >
                <Dropzone />
              </div>
            </div>
            <Button>Submit</Button>
          </form>
        </Section>
        <Section title="Preview">
          <div className="flex flex-col space-y-5 justify-center items-center">
            <img
              src="http://unsplash.it/500/500?random"
              alt="User submission"
              width={500}
              height={500}
            />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default SubmitPage;
