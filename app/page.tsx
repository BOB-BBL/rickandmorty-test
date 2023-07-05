import Head from "next/head";
import Link from "next/link";
import React from "react";

const getRickAndMortyData = async () => {
  const res = await fetch("https://rickandmortyapi.com/api");
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data = await getRickAndMortyData();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center ">Rick and Morty Test</h1>
      {data && (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              <Link href={`/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link href="/ai">AI app</Link>
    </div>
  );
}
