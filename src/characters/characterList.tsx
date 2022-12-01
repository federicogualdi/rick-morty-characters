import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Character, CharacterFilter, getCharacters } from '../api/rick-and-morty';
import { Pagination } from '../shared/pagination/Pagination';
import CharacterItem from './character';
import CharacterModal from './character-modal';

const characterStyles = createUseStyles({
  characters: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1920px'
  }
});

const CharacterList = () => {
  const [nPages, setNPages] = useState<number>(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const characterApi = async (filters?: CharacterFilter) =>
      getCharacters(filters).then((res) => {
        setCharacters(res.results ?? []);
        setNPages(res.info?.pages!);
      });

    characterApi({ page: currentPage });
  }, [currentPage]);

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

  const styles = characterStyles();
  return (
    <>
      <section>
        <div className={styles.characters}>{listItems}</div>
        <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      {CharacterModal({ character, isModalOpen, setIsModalOpen })}
    </>
  );
};

export default CharacterList;
