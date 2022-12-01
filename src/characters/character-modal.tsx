import React from 'react';
import { Character, getEpisodeByIds, getLocationByUrl } from '../api/rick-and-morty';
import Modal from '../shared/modal/Modal';
import CharacterDetails from './character-details';

const locationApi = async (url: string) => await getLocationByUrl(url);

const episodeApi = async (ids: string[]) => await getEpisodeByIds(ids);

const CharacterModal = (props: {
  character?: Character;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  const getCharacterDetails = async (character: Character) => {
    const idEpisodes = character.episode.map((e) => e.split('/').pop()!);
    const [location, episodes] = await Promise.all([
      locationApi(character.location.url),
      episodeApi(idEpisodes)
    ]);
    console.log(location, episodes);
    return { location, episodes };
  };
  if (props?.character) getCharacterDetails(props?.character);

  return (
    <>
      {props.isModalOpen && (
        <Modal
          title={props?.character?.name!}
          setIsOpen={props.setIsModalOpen}
          body={CharacterDetails(props?.character!)}
        />
      )}
    </>
  );
};

export default CharacterModal;
