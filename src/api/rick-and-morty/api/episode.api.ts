import { Episode } from '../models/interfaces';

const EPISODES_ENDPOINT = 'https://rickandmortyapi.com/api/episode';

export const getEpisodeByIds = async (ids: string[]): Promise<Episode[]> => {
  const idsList = ids.join(',');
  return fetch(`${EPISODES_ENDPOINT}/${idsList}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
