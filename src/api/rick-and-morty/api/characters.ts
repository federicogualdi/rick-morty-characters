import { Character, CharacterFilter, Info } from './../models/models';
// export const getCharacters = (filters?: CharacterFilter): Promise<ApiResponse<Info<Character[]>>> =>
//   getResource({ endpoint, options: filters ?? {} })

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

//https://github.com/afuh/rick-and-morty-api-node/blob/master/src/utils/get.ts
//https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-6-building-an-api-client
