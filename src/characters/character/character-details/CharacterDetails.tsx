import React from 'react';
import { createUseStyles } from 'react-jss';
import Gender from '../../../shared/components/character/Gender';
import Status from '../../../shared/components/character/Status';
import { CharacterExtended } from '../../../shared/models/CharacterExtended';
import CharacterDetailsEpisodes from './CharacterDetailsEpisodes';
import CharacterDetailsLocation from './CharacterDetailsLocation';
import CharacterDetailsOrigin from './CharacterDetailsOrigin';

const characterStyles = createUseStyles({
  'character-container-img': {
    flex: '2 1 0%',
    width: '100%'
  },
  'character-img': {
    borderRadius: '20px'
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
    marginTop: '1.15rem',
    alignItems: 'center'
  },
  'character-container-data-main': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  'character-container-data-main-element': {
    fontSize: '1.5rem',
    marginTop: 0,
    marginBottom: 0
  },
  'text-description': {
    color: 'grey',
    marginBottom: '0.5rem'
  }
});

const CharacterDetails = (characterExtended: CharacterExtended) => {
  const styles = characterStyles();
  return (
    <>
      <article>
        <div className={styles['character-container-img']}>
          <img
            className={styles['character-img']}
            src={characterExtended.character.image}
            alt={characterExtended.character.name}
            data-testid="characterdetails-image"
          />
        </div>
        <div className={styles['character-container-data']}>
          <section className={styles['character-container-data-container']}>
            <section className={styles['character-container-data-main']}>
              <h2
                className={styles['character-container-data-main-element']}
                data-testid="characterdetails-name"
              >
                {characterExtended.character.name}
              </h2>
              <Gender gender={characterExtended.character.gender}></Gender>
            </section>
            <section className={styles['character-container-data-main']}>
              <Status status={characterExtended.character.status}></Status>
              <span data-testid="characterdetails-status-species">
                {characterExtended.character.status} - {characterExtended.character.species}
              </span>
            </section>
          </section>
          <>
            {characterExtended?.origin && (
              <CharacterDetailsOrigin origin={characterExtended.origin}></CharacterDetailsOrigin>
            )}
            {characterExtended?.location && (
              <CharacterDetailsLocation
                location={characterExtended.location}
              ></CharacterDetailsLocation>
            )}
            {characterExtended?.episodes && (
              <CharacterDetailsEpisodes
                episodes={characterExtended.episodes}
              ></CharacterDetailsEpisodes>
            )}
          </>
        </div>
      </article>
    </>
  );
};

export default CharacterDetails;
