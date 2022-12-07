import React from 'react';
import { Location } from '../../../api/rick-and-morty';
import CharacterDetailsLocationAbstract from '../../../shared/components/character/character-details/CharacterDetailsLocationAbstract';

type CharacterDetailsLocation = {
  location: Location;
};

const CharacterDetailsLocation = ({ location }: CharacterDetailsLocation) => {
  return (
    <CharacterDetailsLocationAbstract
      location={location}
      description="Last known location:"
    ></CharacterDetailsLocationAbstract>
  );
};

export default CharacterDetailsLocation;
