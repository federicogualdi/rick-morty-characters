import React from 'react';
import { createUseStyles } from 'react-jss';
import { Location } from '../../../api/rick-and-morty';
import IconDimension from '../../../shared/components/icons/data/IconDimension';
import IconResident from '../../../shared/components/icons/data/IconResident';

type CharacterDetailsLocation = {
  location: Location;
};
const characterDetailsLocation = createUseStyles({
  'character-container-data-container': {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1.15rem',
    alignItems: 'center'
  },
  'character-container-data-container-location': {
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

const CharacterDetailsLocation = ({ location }: CharacterDetailsLocation) => {
  const styles = characterDetailsLocation();
  return (
    <section className={styles['character-container-data-container']}>
      <span className={styles['text-description']}>Last known location:</span>
      <a className={styles.title}>{location.name}</a>
      <a className={styles['character-container-data-container-location']}>
        <IconResident></IconResident> {location.residents.length}
        {' resident(s)'}
      </a>
      <a className={styles['character-container-data-container-location']}>
        <IconDimension></IconDimension> {location?.dimension}
      </a>
    </section>
  );
};

export default CharacterDetailsLocation;
