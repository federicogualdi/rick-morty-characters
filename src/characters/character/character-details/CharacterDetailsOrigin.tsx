import React from 'react';
import { createUseStyles } from 'react-jss';
import { Location } from '../../../api/rick-and-morty';
import IconDimension from '../../../shared/components/icons/data/IconDimension';
import IconResident from '../../../shared/components/icons/data/IconResident';

type CharacterDetailsOrigin = {
  origin: Location;
};
const characterDetailsOrigin = createUseStyles({
  'character-container-data-container': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.15rem',
    alignItems: 'center'
  },
  'character-container-data-container-origin': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'text-description': {
    color: 'grey',
    marginBottom: '0.5rem'
  },
  title: {
    fontWeight: 'bolder',
    fontSize: '1.1rem'
  }
});

const CharacterDetailsOrigin = ({ origin }: CharacterDetailsOrigin) => {
  const styles = characterDetailsOrigin();
  return (
    <section className={styles['character-container-data-container']}>
      <span className={styles['text-description']}>Origin:</span>
      <a className={styles.title}>{origin.name}</a>
      <a className={styles['character-container-data-container-origin']}>
        <IconResident></IconResident> {origin.residents.length}
        {' resident(s)'}
      </a>
      <a className={styles['character-container-data-container-origin']}>
        <IconDimension></IconDimension> {origin?.dimension}
      </a>
    </section>
  );
};

export default CharacterDetailsOrigin;
