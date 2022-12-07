import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Icon } from './../../../../asset/icons/dimension.svg';

const iconDimension = createUseStyles({
  'icon-dimension': {
    marginRight: '0.3rem'
  }
});

const IconDimension = () => {
  const styles = iconDimension();
  return <Icon className={styles['icon-dimension']}></Icon>;
};

export default IconDimension;
