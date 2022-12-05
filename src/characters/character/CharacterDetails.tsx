import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Episode } from '../../api/rick-and-morty';
import Gender from '../../shared/components/character/Gender';
import Status from '../../shared/components/character/Status';
import { CharacterExtended } from '../../shared/models/CharacterExtended';

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
  'character-container-data-container-episodes': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexFlow: 'wrap',
    width: '100%',
    justifyContent: 'center'
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
  },
  'text-right': {
    width: '100%',
    textAlign: 'right'
  },
  'text-pointer': {
    marginTop: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)'
  }
});

const episodesCharacter = (episodes?: Episode[], limit?: number) =>
  episodes
    ?.slice(0, limit)
    ?.map((e) => e.name)
    ?.join(', ');

const defaultLimit = 5;

const CharacterDetails = (characterExtended: CharacterExtended) => {
  const [limit, setLimit] = useState<number>(defaultLimit);

  const handleSetLimit = () => {
    if (otherEpisodesAvailable) {
      setLimit(limit + 2 * defaultLimit);
      window.scrollTo(100, 0);
    }
  };

  const otherEpisodesAvailable = limit < characterExtended?.episodes?.length!;

  const styles = characterStyles();
  return (
    <>
      <article>
        <div className={styles['character-container-img']}>
          <img
            className={styles['character-img']}
            src={characterExtended.character.image}
            alt={characterExtended.character.name}
          />
        </div>
        <div className={styles['character-container-data']}>
          <section className={styles['character-container-data-container']}>
            <section className={styles['character-container-data-main']}>
              <h2 className={styles['character-container-data-main-element']}>
                {characterExtended.character.name}
              </h2>
              {Gender(characterExtended.character.gender)}
            </section>
            <section className={styles['character-container-data-main']}>
              {Status(characterExtended.character.status)}
              <span>
                {characterExtended.character.status} - {characterExtended.character.species}
              </span>
            </section>
          </section>
          <section className={styles['character-container-data-container']}>
            <span className={styles['text-description']}>Origin:</span>
            <a>{characterExtended.character.origin.name}</a>
          </section>
          <section className={styles['character-container-data-container']}>
            <span className={styles['text-description']}>Last known location:</span>
            <a>{characterExtended.character.location.name}</a>
          </section>
          {
            <section className={styles['character-container-data-container']}>
              <span className={styles['text-description']}>Episodes featured in:</span>
              <section className={styles['character-container-data-container-episodes']}>
                {episodesCharacter(characterExtended.episodes, limit)}
                {otherEpisodesAvailable && (
                  <span
                    className={`${styles['text-description']} ${styles['text-right']} ${styles['text-pointer']}`}
                    onClick={handleSetLimit}
                  >
                    Other...
                  </span>
                )}
              </section>
            </section>
          }
        </div>
      </article>
    </>
  );
};

export default CharacterDetails;
