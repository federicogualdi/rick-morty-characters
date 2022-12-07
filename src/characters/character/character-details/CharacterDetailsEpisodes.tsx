import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Episode } from '../../../api/rick-and-morty';

type CharacterDetailsEpisodes = {
  episodes: Episode[];
};
const characterDetailsEpisodes = createUseStyles({
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

const CharacterDetailsEpisodes = ({ episodes }: CharacterDetailsEpisodes) => {
  const [limit, setLimit] = useState<number>(defaultLimit);
  const otherEpisodesAvailable = limit < episodes.length;

  const handleSetLimit = () => {
    if (otherEpisodesAvailable) {
      setLimit(episodes.length);
    }
  };

  const styles = characterDetailsEpisodes();
  return (
    <section className={styles['character-container-data-container']}>
      <span className={styles['text-description']}>Episodes featured in:</span>
      <section className={styles['character-container-data-container-episodes']}>
        {episodesCharacter(episodes, limit)}
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
  );
};

export default CharacterDetailsEpisodes;
