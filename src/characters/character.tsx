import React from 'react';
import { Character } from '../api/rick-and-morty';

export default function CharacterItem(character: Character) {
  return (
    <article>
      <div>
        <img src={character.image} />
      </div>
      <div>
        <div>
          <h2>{character.name}</h2>
          <span>
            {character.status} - {character.species} - {character.gender}
          </span>
        </div>
        <div>
          <span>Origin</span>
          <a>{character.origin.name}</a>
        </div>
        <div>
          <span>Location</span>
          <a>{character.location.name}</a>
        </div>
      </div>
    </article>
  );
}
