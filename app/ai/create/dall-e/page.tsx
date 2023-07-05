import Button from "app/ai/_components/atoms/Button";
import DalleCreate from "app/ai/_components/organisms/DalleCreate";

const Dalle: React.FC = () => {
  return (
    <div className="flex w-full flex-col pb-10 gap-y-5 items-center">
      <div className="max-w-7xl px-10 py-10 w-full space-y-10">
        <h1 className="text-4xl">Create images with Dall-E 2</h1>
        <DalleCreate />

        <div className="w-full flex justify-center">
          <Button>Send to submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Dalle;
