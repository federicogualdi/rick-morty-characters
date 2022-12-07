import React from 'react';
import { createUseStyles } from 'react-jss';
import { CharacterGender } from '../../../api/rick-and-morty';
import getIcon from '../../utils/Gender';

type Gender = {
  gender: CharacterGender;
};

const genderStyles = createUseStyles({
  icon: {
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    color: 'white'
  }
});

const Gender = ({ gender }: Gender) => {
  const styles = genderStyles();
  const icon = getIcon(gender);
  if (!icon) return <></>;
  return (
    <div className={styles.icon} data-testid="characteritem-gender">
      {icon}
    </div>
  );
};

export default Gender;
