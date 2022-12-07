import React from 'react';
import { createUseStyles } from 'react-jss';
import { CharacterStatus } from '../../../api/rick-and-morty';
import getColor from '../../utils/Status.utils';

type Status = {
  status: CharacterStatus;
};

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

const Status = ({ status }: Status) => {
  const color = getColor(status);
  const styles = statusStyles(color);
  return (
    <div className={`${styles().icon} ${styles().circle}`} data-testid="characteritem-status"></div>
  );
};

export default Status;
