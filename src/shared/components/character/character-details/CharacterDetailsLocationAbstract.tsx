import React from 'react';
import { createUseStyles } from 'react-jss';
import { Location } from '../../../../api/rick-and-morty';
import IconDimension from '../../icons/data/IconDimension';
import IconResident from '../../icons/data/IconResident';

type CharacterDetailsLocationAbstract = {
  location: Location;
  description: string;
};
const characterDetailsLocationAbs = createUseStyles({
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
  },
  subtitle: {
    fontWeight: 'lighter',
    fontSize: '0.9rem',
    color: 'grey',
    marginLeft: '0.5rem'
  }
});

const CharacterDetailsLocationAbstract = ({
  location,
  description
}: CharacterDetailsLocationAbstract) => {
  const styles = characterDetailsLocationAbs();
  return (
    <section
      className={styles['character-container-data-container']}
      data-testid="characterdetails-location-abstract"
    >
      <span className={styles['text-description']}>{description}</span>
      <a className={styles.title}>
        {location.name}
        <span className={styles.subtitle}>{`[${location.type}]`}</span>
      </a>
      <a className={styles['character-container-data-container-location']}>
        <IconResident></IconResident> {`${location.residents.length} resident(s)`}
      </a>
      <a className={styles['character-container-data-container-location']}>
        <IconDimension></IconDimension> {location?.dimension}
      </a>
    </section>
  );
};

export default CharacterDetailsLocationAbstract;
