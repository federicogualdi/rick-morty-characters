import { Location } from '../models/Interfaces';

export const getOriginByUrl = async (url: string): Promise<Location> => {
  if (!url) throw Error('Origin Url was empty');
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
