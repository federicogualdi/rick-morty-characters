import React from 'react';
import { CharacterGender } from '../../api/rick-and-morty';
import IconFemale from '../components/icons/gender/IconFemale';
import IconGenderless from '../components/icons/gender/IconGenderless';
import IconMale from '../components/icons/gender/IconMale';

/**
 * Return svg Icon based on character gender.
 *
 * @param gender - Character gender
 * @returns the icon based on character gender
 */
export default function getIcon(gender: CharacterGender) {
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
}
