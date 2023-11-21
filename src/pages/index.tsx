import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [data, setData] = React.useState(null);
  console.log("🚀 ~ file: index.tsx:8 ~ Home ~ data:", data);

  React.useEffect(() => {
    console.log("Hello World");
    fetch("https://rickandmortyapi.com/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Head>
        <title>BOB Rick and Morty Test</title>
      </Head>
      <main>
        <h1>Rick and Morty Test</h1>
        {data && (
          <ul>
            {Object.keys(data).map((key) => (
              <li key={key}>
                <Link href={`/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
