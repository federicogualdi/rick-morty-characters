import React, { useEffect } from 'react';
import { Character, getEpisodeByIds, getLocationByUrl } from '../api/rick-and-morty';
import Modal from '../shared/modal/Modal';
import CharacterDetails from './character-details';

const locationApi = async (url: string) => await getLocationByUrl(url);

const episodeApi = async (ids: string[]) => await getEpisodeByIds(ids);

const getCharacterDetails = async (character: Character) => {
  const idEpisodes = character.episode.map((e) => e.split('/').pop()!);
  const [location, episodes] = await Promise.all([
    locationApi(character.location.url),
    episodeApi(idEpisodes)
  ]);
  return { location, episodes };
};

const CharacterModal = (props: {
  character: Character;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  useEffect(() => {
    getCharacterDetails(props.character);
  }, [props.character]);

  return (
    <>
      <Modal
        title={props.character.name}
        setIsOpen={props.setIsModalOpen}
        body={CharacterDetails(props.character)}
      />
    </>
  );
};

export default CharacterModal;
