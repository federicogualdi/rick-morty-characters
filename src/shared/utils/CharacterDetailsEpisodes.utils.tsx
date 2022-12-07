import { Episode } from '../../api/rick-and-morty';

export function episodesCharacter(episodes?: Episode[], limit?: number) {
  return episodes
    ?.slice(0, limit)
    ?.map((e) => e.name)
    ?.join(', ');
}

export const defaultLimit = 5;
