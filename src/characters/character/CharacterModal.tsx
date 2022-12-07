import React, { useEffect, useState } from 'react';
import { getLocationByUrl, getEpisodeByIds, Character } from '../../api/rick-and-morty';
import { getOriginByUrl } from '../../api/rick-and-morty/api/Origin.api';
import Modal from '../../shared/modal/Modal';
import { CharacterExtended } from '../../shared/models/CharacterExtended';
import CharacterDetails from './character-details/CharacterDetails';

const originApi = async (url: string) => await getOriginByUrl(url);

const locationApi = async (url: string) => await getLocationByUrl(url);

const episodeApi = async (ids: string[]) => await getEpisodeByIds(ids);

const getCharacterDetails = async (
  character: Character,
  setCharacterExtended: (data: CharacterExtended) => void
) => {
  const idEpisodes = character.episode.map((e) => e.split('/').pop()!);
  const characterExtended: CharacterExtended = { character: character };
  await Promise.all([
    originApi(character.origin.url)
      .then((origin) => (characterExtended['origin'] = origin))
      .catch((e: Error) => console.warn(e?.message)),
    locationApi(character.location.url)
      .then((location) => (characterExtended['location'] = location))
      .catch((e: Error) => console.warn(e?.message)),
    episodeApi(idEpisodes)
      .then(
        (episodes) =>
          (characterExtended['episodes'] = Array.isArray(episodes) ? episodes : [episodes])
      )
      .catch((e: Error) => console.warn(e?.message))
  ]);
  setCharacterExtended(characterExtended);
};

const CharacterModal = (props: {
  character: Character;
  setIsModalOpen: (isOpen: boolean) => void;
}) => {
  const [characterExtended, setCharacterExtended] = useState<CharacterExtended>({
    character: props.character
  });
  const [dataReady, setDataReady] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => await getCharacterDetails(props.character, setCharacterExtended);
    fetchData().then(() => setDataReady(true));
  }, [props.character]);

  return (
    <>
      {dataReady && (
        <Modal
          title={props.character.name}
          setIsOpen={props.setIsModalOpen}
          body={<CharacterDetails {...characterExtended}></CharacterDetails>}
        />
      )}
    </>
  );
};

export default CharacterModal;
