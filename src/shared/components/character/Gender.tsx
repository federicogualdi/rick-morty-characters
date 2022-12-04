import React from 'react';
import { createUseStyles } from 'react-jss';
import { CharacterGender } from '../../../api/rick-and-morty';
import IconFemale from '../icons/gender/IconFemale';
import IconGenderless from '../icons/gender/IconGenderless';
import IconMale from '../icons/gender/IconMale';

const genderStyles = createUseStyles({
  icon: {
    marginLeft: '0.8rem',
    marginRight: '0.8rem',
    color: 'white'
  }
});

const getIcon = (gender: CharacterGender) => {
  switch (gender) {
    case 'Female':
      return <IconFemale></IconFemale>;
    case 'Male':
      return <IconMale></IconMale>;
    case 'Genderless':
      return <IconGenderless></IconGenderless>;
    case 'unknown':
    default:
      return;
  }
};

const Gender = (gender: CharacterGender) => {
  const styles = genderStyles();
  const icon = getIcon(gender);
  if (!icon) return;
  return <div className={styles.icon}>{icon}</div>;
};

export default Gender;
