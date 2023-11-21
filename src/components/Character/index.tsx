/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICharacterProps } from "./types";

const Character: React.FC<ICharacterProps> = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
        margin: "10px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <img src={props.image} alt={props.name} width={220} height={190} />
    </div>
  );
};

export default Character;
