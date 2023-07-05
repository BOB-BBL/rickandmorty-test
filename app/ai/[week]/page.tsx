import Section from "../_components/atoms/Section";

const getInsult = async () => {
  const res = await fetch(
    "https://evilinsult.com/generate_insult.php?lang=en&type=json"
  );
  const data = await res.json();
  return data.insult;
};

const WeekPage = async () => {
  const insult = await getInsult();

  return (
    <div className="flex flex-col items-center justify-between p-24 space-y-20 w-full">
      <div>
        <h1 className="text-6xl font-bold text-center text-blue-500">{`${insult}`}</h1>
      </div>
      <Section title="Rules">
        <ul>
          <li>Rule 1</li>
          <li>Rule 2</li>
          <li>Rule 3</li>
        </ul>
      </Section>
      <Section title="Preview">
        <div className="flex flex-col space-y-5 justify-center items-center">
          <img
            src="http://unsplash.it/500/500?random"
            alt="User submission"
            width={500}
            height={500}
          />
          <div id="timer">
            <h2 className="text-4xl font-bold text-center text-blue-500">
              Time remaining: 00:00:00
            </h2>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WeekPage;
