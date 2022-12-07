import React from 'react';
import { createUseStyles } from 'react-jss';
import { Character } from '../../api/rick-and-morty';
import Gender from '../../shared/components/character/Gender';
import Status from '../../shared/components/character/Status';

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
    padding: '1.25rem',
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    flexDirection: 'column'
  },
  'character-container-data-container': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.15rem'
  },
  'character-container-data-main': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  'character-container-data-main-element': {
    marginTop: 0,
    marginBottom: 0
  },
  '@media screen and (max-width: 600px)': {
    character: {
      flexDirection: 'column',
      height: 'initial',
      width: '100%'
    }
  },
  'text-description': {
    color: 'grey',
    marginBottom: '0.5rem'
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
            data-testid="characteritem-image"
          />
        </div>
        <div className={styles['character-container-data']}>
          <section>
            <section className={styles['character-container-data-main']}>
              <h2
                className={styles['character-container-data-main-element']}
                data-testid="characteritem-name"
              >
                {props.character.name}
              </h2>
              <Gender gender={props.character.gender}></Gender>
            </section>
            <section className={styles['character-container-data-main']}>
              <Status status={props.character.status}></Status>
              <span data-testid="characteritem-status-species">
                {props.character.status} - {props.character.species}
              </span>
            </section>
          </section>
          <section className={styles['character-container-data-container']}>
            <span className={styles['text-description']}>Origin:</span>
            <a data-testid="characteritem-origin">{props.character.origin.name}</a>
          </section>
          <section className={styles['character-container-data-container']}>
            <span className={styles['text-description']}>Last known location:</span>
            <a data-testid="characteritem-location">{props.character.location.name}</a>
          </section>
        </div>
      </article>
    </>
  );
};

export default CharacterItem;
