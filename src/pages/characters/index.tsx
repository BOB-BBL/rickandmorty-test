import { GetStaticProps } from "next";
import React from "react";

export default function index() {
  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/characters/1",
      permanent: false,
    },
  };
};
