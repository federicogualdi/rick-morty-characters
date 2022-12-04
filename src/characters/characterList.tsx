import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Character, CharacterFilter, getCharacters } from '../api/rick-and-morty';
import InputBox from '../shared/components/input-box';
import Pagination from '../shared/pagination/Pagination';
import CharacterItem from './character';
import CharacterModal from './character-modal';

const characterStyles = createUseStyles({
  'characters-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgb(32, 35, 41)',
    minHeight: '50vh'
  },
  characters: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1920px'
  },
  inputBox: {
    position: 'sticky',
    top: '1rem',
    zIndex: 10
  }
});

const lockUnlockScroll = (isModalOpen: boolean) =>
  (document.body.style.overflow = isModalOpen ? 'hidden' : 'unset');

const CharacterList = () => {
  const [nPages, setNPages] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character>();
  const [filterName, setFilterName] = useState<string>();

  useEffect(() => {
    const characterApi = async (filters?: CharacterFilter) =>
      getCharacters(filters).then((res) => {
        setCharacters(res.results ?? []);
        setNPages(res.info?.pages!);
      });

    characterApi({ page: currentPage, name: filterName });
  }, [currentPage, filterName]);

  useEffect(() => {
    lockUnlockScroll(isModalOpen);
  }, [isModalOpen]);

  const listItems = characters.map((character) => (
    <CharacterItem
      key={character.id}
      character={character}
      onClickEvent={() => onclickHandler(character)}
    />
  ));

  const onclickHandler = (character: Character) => {
    setCharacter(character);
    setIsModalOpen(true);
  };

  const handleFilterName = (value: string) => {
    setFilterName(value);
    setCurrentPage(1);
  };

  const styles = characterStyles();
  return (
    <>
      <InputBox
        className={!isModalOpen ? styles.inputBox : ''}
        onChange={handleFilterName}
      ></InputBox>
      <section className={styles['characters-container']}>
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className={styles.characters}>{listItems}</div>
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      {isModalOpen && <CharacterModal character={character!} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default CharacterList;
