import { Character, Episode, Location } from '../../api/rick-and-morty';

export type CharacterExtended = {
  character: Character;
  location?: Location;
  episodes?: Episode[];
};
