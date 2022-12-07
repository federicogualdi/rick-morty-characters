import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Character, CharacterFilter, getCharacters } from '../api/rick-and-morty';
import DebouncedInputBox from '../shared/components/DebouncedInputBox';
import Pagination from '../shared/pagination/Pagination';
import CharacterModal from './character/CharacterModal';
import CharacterList from './CharacterList';
import CharactersNotFound from './CharactersNotFound';

const characterStyles = createUseStyles({
  'characters-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(32, 35, 41)',
    minHeight: '60vh'
  }
});

const lockUnlockScroll = (isModalOpen: boolean) =>
  (document.body.style.overflow = isModalOpen ? 'hidden' : 'unset');

const scroolToTop = () => window.scrollTo(0, 0);

const Characters = () => {
  const [nPages, setNPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Character[]>([]);

  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const [filterName, setFilterName] = useState<string>();

  useEffect(() => {
    const characterApi = async (filters?: CharacterFilter) =>
      getCharacters(filters).then((res) => {
        setCharacters(res.results ?? []);
        setNPages(res.info?.pages!);
        setIsLoading(false);
      });

    setIsLoading(true);
    characterApi({ page: currentPage, name: filterName }).then(() => scroolToTop());
  }, [currentPage, filterName]);

  useEffect(() => {
    lockUnlockScroll(isModalOpen);
  }, [isModalOpen]);

  const onChangeFilterName = (value: string) => {
    setCurrentPage(1);
    setFilterName(value);
  };

  const onCharacterClickHandler = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const styles = characterStyles();
  return (
    <>
      <DebouncedInputBox
        needStickStyle={!isModalOpen}
        setDebouncedValue={onChangeFilterName}
      ></DebouncedInputBox>
      <section data-testid="debounced-input-box" className={styles['characters-container']}>
        <>
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {CharacterList(characters, onCharacterClickHandler)}
          {CharactersNotFound(characters.length, isLoading, filterName)}
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
      </section>
      {isModalOpen && (
        <CharacterModal character={selectedCharacter!} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Characters;
