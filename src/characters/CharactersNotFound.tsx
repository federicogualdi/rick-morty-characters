import React from 'react';
import { createUseStyles } from 'react-jss';

const charactersNotFoundStyles = createUseStyles({
  'characters-empty': {
    color: 'white',
    fontSize: '1.2rem',
    '& $b': {
      fontSize: '1.4rem'
    }
  }
});

const noCharactersFound = (className: string, characterSearched?: string) => {
  if (!characterSearched) return <span className={className}>No Characters Found</span>;

  return (
    <span className={className}>
      no characters called <b>{`${characterSearched}`}</b> were found
    </span>
  );
};

const CharactersNotFound = (
  itemsAmount: number,
  isLoading: boolean,
  characterSearched?: string
) => {
  const styles = charactersNotFoundStyles();
  return (
    itemsAmount === 0 &&
    !isLoading &&
    noCharactersFound(styles['characters-empty'], characterSearched)
  );
};

export default CharactersNotFound;
