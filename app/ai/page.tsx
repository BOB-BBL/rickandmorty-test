import Image from "next/image";
import Section from "./_components/atoms/Section";
import Button from "./_components/atoms/Button";
import ImageWithInfo from "./_components/atoms/ImageWithInfo";
import Link from "./_components/atoms/Link";

// hero title
// show winning image of last competition
// what is this week's theme?
// show images of previous competitions in 2x2 grid

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full grow ">
      <div className="bg-gradient-to-b from-black to-slate-900">
        <div className="flex flex-col items-center justify-between p-24">
          <div>
            <h1 className="text-6xl font-bold text-center text-blue-500">
              The best weekly AI image generation competition
            </h1>
          </div>

          <div
            id="prev-winner"
            className="flex flex-col items-center justify-between space-y-5"
          >
            <div>
              <h3 className="text-2xl font-bold text-center text-blue-500">
                Previous Winner:
              </h3>
              <p className="text-4xl font-bold text-center text-blue-500">
                {"Username"}
              </p>
            </div>

            <div className="border-4 border-orange-700 rounded-md">
              <ImageWithInfo
                className="rounded-sm"
                src="/marsmehere.png"
                alt="Previous Winner"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto space-y-20">
        <Section id="this-week" title="This Week's Theme">
          <div className="flex flex-col items-center justify-between">
            <h3 className="text-2xl font-bold text-center text-blue-500">
              Mountains
            </h3>
            <div className="flex flex-col items-center justify-between">
              <h4 className=" font-bold text-center text-blue-500">
                What do you feel when standing at the foot of mountain looking
                up?
              </h4>
              <div className="flex flex-col items-center justify-between text-blue-500">
                <h5 className="text-lg font-bold text-center ">Rules</h5>
                <ul>
                  <li>
                    <p>Images has to be made using a txt2img diffusion model</p>
                  </li>
                  <li>
                    <p>The prompt has to contain this weeks wildcard</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link href="/ai/submit">Submit your image</Link>
        </Section>

        <>
          {Array(5)
            .fill(5)
            .map((_, i) => (
              <Section key={i} title={`Week ${i + 1}`} id="prev-competitions">
                <div className="flex w-full">
                  <img
                    src="http://unsplash.it/300/300?random"
                    alt="Previous Winner"
                    width={300}
                    height={300}
                  />
                  <div id="image-scroll" className="flex overflow-x-scroll">
                    {Array(5)
                      .fill(5)
                      .map((_, i) => (
                        <img
                          key={i}
                          src="http://unsplash.it/300/300?random"
                          alt="Previous image"
                          width={300}
                          height={300}
                        />
                      ))}
                  </div>
                </div>
              </Section>
            ))}
        </>
      </div>
    </div>
  );
};

export default Home;
