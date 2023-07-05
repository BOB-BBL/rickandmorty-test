import Section from "../_components/atoms/Section";

const LearnPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24 space-y-20 w-full">
      <h1 className="text-6xl font-bold text-center text-blue-500">
        So you want to learn to prompt?
      </h1>
      <Section title="Basics">
        <p>
          The basic idea behind text to image prompting is that you give the AI
          a sentence or two and it will generate an image based on that
          sentence. The AI is trained on a large dataset of images and their
          corresponding captions. The AI learns to associate certain words with
          certain images. For example, if you give the AI the sentence "a cat
          sitting on a table", it will generate an image of a cat sitting on a
          table.
        </p>
      </Section>
      <Section title="Further reading">
        <ul>
          <li>
            <a href="https://www.gwern.net/GPT-3">GPT-3</a>
          </li>
          <li>
            <a href="https://stable-diffusion-art.com/">stable-diffusion-art</a>
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default LearnPage;
