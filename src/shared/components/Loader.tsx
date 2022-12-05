import React from 'react';
import { createUseStyles } from 'react-jss';
import gif from './../../asset/gifs/loader.gif';

const loaderStyles = createUseStyles({
  'loader-container': {
    display: 'flex',
    placeContent: 'center'
  },
  loader: {
    width: '100px'
  }
});

const Loader = () => {
  const styles = loaderStyles();
  return (
    <section className={styles['loader-container']}>
      <img src={gif} className={styles.loader} alt="loading..." />
    </section>
  );
};

export default Loader;
