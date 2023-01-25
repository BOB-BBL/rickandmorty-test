/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICharacterProps } from "./types";

const Character: React.FC<ICharacterProps> = (props) => {
  return (
    <div
      style={{
        width: "25rem",
        height: "25rem",
        backgroundColor: "lightgray",
        margin: "10px",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3>Character</h3>
      <ul>
        <li>Id: {props.id}</li>
        <li>Name: {props.name}</li>
        <li>Status: {props.status}</li>
        <li>Species: {props.species}</li>
        <img src={props.image} alt={props.name} width={200} height={200} />
      </ul>
    </div>
  );
};

export default Character;
