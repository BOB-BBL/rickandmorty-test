import Info from "@/components/characters/Info";
import Link from "next/link";
import React, { useState } from "react";
import Character from "@/components/characters/Character";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface ICharactersProps {
  data: {
    results: {
      id: number;
      name: string;
      status: string;
      species: string;
    }[];
    info: any;
  };
}

const Characters: NextPage<ICharactersProps> = ({ data }) => {
  const [color, setColor] = useState("lightGreen");
  const [value, setValue] = useState("");
  const [valueid, setValueid] = useState("");
  const [valuestatus, setValuestatus] = useState("");
  const [valuespecies, setValuespecies] = useState("");
  const filterthedata = data.results.filter(
    (character) =>
      character.name.toLowerCase().includes(value.toLowerCase()) ||
      character.id.toString().toLowerCase().includes(value.toLowerCase()) ||
      character.status.toLowerCase().includes(value.toLowerCase()) ||
      character.species.toLowerCase().includes(value.toLowerCase())
  );
  const [sort, setSort] = useState("");
  const sorted = filterthedata.sort(function (a, b) {
    if (sort === "alfabetisk") {
      return a.name.localeCompare(b.name);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Characters</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Search</p>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <div>
          <button onClick={() => setColor("#ff4d4d")}>red</button>
          <button onClick={() => setColor("lightBlue")}>lightBlue</button>
          <button onClick={() => setColor("lightGreen")}>green</button>
          <div>
            <button
              onClick={function () {
                setSort("alfabetisk");
              }}
            >
              Sort by name
            </button>
            <button
              onClick={function () {
                setSort("id");
              }}
            >
              Sort by Id
            </button>
          </div>
        </div>
      </div>
      <div>
        {data ? <Info {...data.info} /> : <p>Loading...</p>}
        {data && (
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {sorted.map((character: any) => (
              <Character {...character} key={character.id} color={color} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  const paths = Array.from({ length: data.info.pages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`
    https://rickandmortyapi.com/api/character/?page=${
      context?.params?.page || 1
    }`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Characters;
