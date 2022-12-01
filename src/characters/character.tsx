import React from 'react';
import { createUseStyles } from 'react-jss';
import { Character } from '../api/rick-and-morty';

const characterStyles = createUseStyles({
  character: {
    display: 'flex',
    cursor: 'pointer',

    background: 'rgb(60, 62, 68)',
    borderRadius: '0.5rem',
    margin: '0.75rem',
    boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
    overflow: 'hidden',
    width: '600px',
    height: '220px'
  },
  'character-container-img': {
    flex: '2 1 0%',
    width: '100%'
  },
  'character-img': {
    height: '100%',
    width: '100%',
    margin: '0px',
    opacity: 1,
    transition: 'opacity 0.5s ease 0s',
    objectPosition: 'center center',
    objectFit: 'cover',
    maxWidth: '100%',
    display: 'block'
  },
  'character-container-data': {
    flex: '3 1 0%',
    position: 'relative',
    padding: '0.75rem',
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    flexDirection: 'column'
  },
  '@media screen and (max-width: 600px)': {
    character: {
      flexDirection: 'column',
      height: 'initial',
      width: '100%'
    }
  }
});

const CharacterItem = (props: {
  character: Character;
  onClickEvent: (character: Character) => void;
}) => {
  const styles = characterStyles();
  return (
    <>
      <article className={styles.character} onClick={() => props.onClickEvent(props.character)}>
        <div className={styles['character-container-img']}>
          <img
            className={styles['character-img']}
            src={props.character.image}
            alt={props.character.name}
          />
        </div>
        <div className={styles['character-container-data']}>
          <h2>{props.character.name}</h2>
          <span>
            {props.character.status} - {props.character.species} - {props.character.gender}
          </span>
          <div>
            <span>Origin</span>
            <a>{props.character.origin.name}</a>
          </div>
          <div>
            <span>Location</span>
            <a>{props.character.location.name}</a>
          </div>
        </div>
      </article>
    </>
  );
};

export default CharacterItem;
