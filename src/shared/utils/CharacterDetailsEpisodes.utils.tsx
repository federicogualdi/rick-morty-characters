import { Episode } from '../../api/rick-and-morty';

/**
 * Returns a slice of character's episodes.
 *
 * @param episodes - All episodes where character is featured in
 * @param limit - Maximum amount of episodes to show
 * @returns a portion of episodes until the limit is reached
 */
export function episodesCharacter(episodes?: Episode[], limit?: number) {
  return episodes
    ?.slice(0, limit)
    ?.map((e) => e.name)
    ?.join(', ');
}

/**
 * Default maximum episode amount when component is rendered
 *
 * @readonly
 */
export const defaultLimit = 5;
