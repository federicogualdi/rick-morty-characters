import React from 'react';
import { createUseStyles } from 'react-jss';

const headerStyles = createUseStyles({
  'header-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  },
  'header-title': {
    fontSize: '4rem',
    textAlign: 'center'
  }
});

const Header = () => {
  const styles = headerStyles();
  const title = "'Rick And Morty' characters";
  return (
    <header className={styles['header-container']}>
      <h1 className={styles['header-title']}>{title}</h1>
    </header>
  );
};

export default Header;
