import Info from "@/components/Info";
import Link from "next/link";
import React from "react";
import Character from "@/components/Character";
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
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Characters</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Search</p>
        <input type="text" />
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
            {data?.results?.map((character: any) => (
              <Character {...character} key={character.id} />
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
