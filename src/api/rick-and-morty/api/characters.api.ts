import { Character, CharacterFilter, Info } from '../models/models';

const CHARACTERS_ENDPOINT = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (filters?: CharacterFilter): Promise<Info<Character[]>> => {
  const qp = '?';
  const params: string[] = [];

  if (filters) {
    for (const [key, value] of Object.entries(filters)) {
      if (value != undefined && !!value) {
        params.push(`${key}=${value}`);
      }
    }
  }
  return fetch(`${CHARACTERS_ENDPOINT}${params.length > 0 ? qp + params.join('&') : ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
