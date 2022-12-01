import { Location } from '../models/interfaces';

export const getLocationByUrl = async (url: string): Promise<Location> => {
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
