import React from "react";

import "./Character.css";

function Character({ character }) {
  return (
    <div className="character-container">
      <img src={character.image} alt="" />
      <h1 className="name">{character.name}</h1>
      <p className={`status ${character.status}`}>{character.status}</p>
      <h3 className="location-title">Location:</h3>
      <p className="location-name">{character.location.name}</p>
    </div>
  );
}

export default Character;
