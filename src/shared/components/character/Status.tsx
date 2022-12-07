import React from 'react';
import { createUseStyles } from 'react-jss';
import { CharacterStatus } from '../../../api/rick-and-morty';

const statusStyles = (color: string) =>
  createUseStyles({
    icon: {
      marginLeft: '0.8rem',
      marginRight: '0.8rem'
    },
    circle: {
      background: color,
      borderRadius: '50%',
      width: '0.8rem',
      height: '0.8rem'
    }
  });

const getColor = (status: CharacterStatus) => {
  switch (status) {
    case 'Alive':
      return '#00cf1f';
    case 'Dead':
      return '#eb4034';
    case 'unknown':
    default:
      return 'grey';
  }
};

const Status = (status: CharacterStatus) => {
  const color = getColor(status);
  const styles = statusStyles(color);
  return <div className={`${styles().icon} ${styles().circle}`}></div>;
};

export default Status;
