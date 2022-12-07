import { CharacterStatus } from '../../api/rick-and-morty';

/**
 * Return color based on character status to use as background-color.
 *
 * @param status - Character status
 * @returns the color based on character status value
 */
export default function getColor(status: CharacterStatus) {
  switch (status) {
    case 'Alive':
      return '#00cf1f';
    case 'Dead':
      return '#eb4034';
    case 'unknown':
    default:
      return 'grey';
  }
}
