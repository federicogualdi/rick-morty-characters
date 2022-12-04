import React from 'react';
import { createUseStyles } from 'react-jss';
import { Character } from '../api/rick-and-morty';
import CharacterItem from './character/CharacterItem';

const characterStyles = createUseStyles({
  characters: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1920px',
    padding: '1.5rem'
  }
});

const listItems = (characters: Character[], onclickHandler: (character: Character) => void) =>
  characters.map((character) => (
    <CharacterItem
      key={character.id}
      character={character}
      onClickEvent={() => onclickHandler(character)}
    />
  ));

const CharacterList = (characters: Character[], onclickHandler: (character: Character) => void) => {
  const styles = characterStyles();
  return <div className={styles.characters}>{listItems(characters, onclickHandler)}</div>;
};

export default CharacterList;
