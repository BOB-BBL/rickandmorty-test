/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ICharacterProps } from "./types";
import { flattenDiagnosticMessageText } from "typescript";
 
const Character: React.FC<ICharacterProps> = (props) => {
  return (
    <div
      style={{
        display: "block",
        width: "25rem",
        height: "25rem",
        backgroundColor: "lightgreen",
        marginRight: "60px" ,
        marginTop: "30px",
        boxShadow: "-1px 3px 4px",
        borderRadius: "80px",
        paddingTop: "20px",
        paddingLeft: "60px",
        paddingRight: "30px",
      }}
      
    >
      
      <h3>Character</h3>
      <ul>
        <li>Id: {props.id}</li>
        <li>Name: {props.name}</li>
        <li>Status: {props.status}</li>
        <li>Species: {props.species}</li>
        <img src={props.image} alt={props.name} width={220} height={190} />
      
      
      </ul>
    </div>
  );
};

export default Character;
