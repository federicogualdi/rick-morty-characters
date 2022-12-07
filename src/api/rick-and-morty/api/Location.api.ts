import { Location } from '../models/Interfaces';

export const getLocationByUrl = async (url: string): Promise<Location> => {
  if (!url) throw Error('Location Url was empty');
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (res) => await res.json());
};
