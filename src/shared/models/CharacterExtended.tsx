import { Character, Episode, Location } from '../../api/rick-and-morty';

export type CharacterExtended = {
  character: Character;
  origin?: Location;
  location?: Location;
  episodes?: Episode[];
};
