import React from "react";
import Character from "../Character/Character";
import Pagination from "../Pagination/Pagination";

import "./List.css";

function List({ list, characterCount }) {
  return (
    <>
      <h3 className="list-count">{`Characters: ${characterCount}`}</h3>
      <div className="list-container">
        {list.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
    </>
  );
}

export default List;
