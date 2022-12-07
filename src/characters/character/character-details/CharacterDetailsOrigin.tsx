import React from 'react';
import { Location } from '../../../api/rick-and-morty';
import CharacterDetailsLocationAbstract from '../../../shared/components/character/character-details/CharacterDetailsLocationAbstract';

type CharacterDetailsOrigin = {
  origin: Location;
};

const CharacterDetailsOrigin = ({ origin }: CharacterDetailsOrigin) => {
  return (
    <CharacterDetailsLocationAbstract
      location={origin}
      description="Origin:"
    ></CharacterDetailsLocationAbstract>
  );
};

export default CharacterDetailsOrigin;
