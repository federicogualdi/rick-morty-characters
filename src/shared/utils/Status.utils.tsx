import { CharacterStatus } from '../../api/rick-and-morty';

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
