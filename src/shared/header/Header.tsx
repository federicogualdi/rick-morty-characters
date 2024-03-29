import React from 'react';
import { createUseStyles } from 'react-jss';

const headerStyles = createUseStyles({
  'header-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh'
  },
  'header-title': {
    fontSize: '4rem',
    textAlign: 'center'
  },
  '@media screen and (max-width: 600px)': {
    'header-title': {
      fontSize: '2.5rem'
    }
  }
});

const Header = () => {
  const styles = headerStyles();
  const title = "'Rick And Morty' characters";
  return (
    <header className={styles['header-container']}>
      <h1 className={styles['header-title']} data-testid="header-title">
        {title}
      </h1>
    </header>
  );
};

export default Header;
