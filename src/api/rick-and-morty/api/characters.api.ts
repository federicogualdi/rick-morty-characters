import { Character, CharacterFilter, Info } from '../models/models';

const CHARACTERS_ENDPOINT = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (filters?: CharacterFilter): Promise<Info<Character[]>> => {
  let qp = '';
  if (filters?.page !== undefined) {
    qp = `/?page=${filters?.page}`;
  }
  return fetch(`${CHARACTERS_ENDPOINT}${qp}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
