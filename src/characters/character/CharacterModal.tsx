import React, { useEffect, useState } from 'react';
import { getLocationByUrl, getEpisodeByIds, Character } from '../../api/rick-and-morty';
import Modal from '../../shared/modal/Modal';
import { CharacterExtended } from '../../shared/models/CharacterExtended';
import CharacterDetails from './CharacterDetails';

const locationApi = async (url: string) => await getLocationByUrl(url);

const episodeApi = async (ids: string[]) => await getEpisodeByIds(ids);

const getCharacterDetails = async (
  character: Character,
  setCharacterExtended: (data: CharacterExtended) => void
) => {
  const idEpisodes = character.episode.map((e) => e.split('/').pop()!);
  const [location, episodes] = await Promise.all([
    locationApi(character.location.url),
    episodeApi(idEpisodes)
  ]);
  setCharacterExtended({
    character: character,
    location: location,
    episodes: Array.isArray(episodes) ? episodes : [episodes]
  });
};

const CharacterModal = (props: {
  character: Character;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  const [characterExtended, setCharacterExtended] = useState<CharacterExtended>({
    character: props.character
  });

  useEffect(() => {
    getCharacterDetails(props.character, setCharacterExtended).catch((e: Error) =>
      console.warn(e?.message)
    );
  }, [props.character]);

  return (
    <>
      <Modal
        title={props.character.name}
        setIsOpen={props.setIsModalOpen}
        body={CharacterDetails(characterExtended)}
      />
    </>
  );
};

export default CharacterModal;
