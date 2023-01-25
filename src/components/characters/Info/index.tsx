import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IInfoProps } from "./types";

const Info: React.FC<IInfoProps> = ({ count, next, pages, prev }) => {
  const { query } = useRouter();
  return (
    <div>
      <h2>Info</h2>
      <ul>
        <li> Current page: {query.page || 1}</li>
        <li>Count: {count}</li>
        <li>Pages: {pages}</li>
        <li>
          {next ? (
            <Link href={`/characters/${+((query.page as string) || 1) + 1}`}>
              Next
            </Link>
          ) : (
            "Next"
          )}
        </li>
        <li>
          {prev ? (
            <Link href={`/characters/${+((query.page as string) || 1) - 1}`}>
              Prev
            </Link>
          ) : (
            "Prev"
          )}
        </li>
      </ul>
    </div>
  );
};

export default Info;
