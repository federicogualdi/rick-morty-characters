import React from 'react';
import { createUseStyles } from 'react-jss';

type Modal = {
  title: string;
  setIsOpen: (isOpen: boolean) => void;
  body: JSX.Element;
};

const modalStyles = createUseStyles({
  darkBG: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100vw',
    height: '100vh',
    top: 0
  },
  modal: {
    backgroundColor: 'rgb(60, 62, 68)',
    color: 'white',
    zIndex: '10',
    borderRadius: '16px',
    boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)'
    //maxHeight: '80vh'
  },
  modalHeader: {
    height: '50px',
    backgroundColor: 'rgb(60, 62, 68)',
    overflow: 'hidden',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px'
  },
  heading: {
    margin: '0',
    padding: '10px',
    color: 'white',
    fontWeight: '500',
    fontSize: '2rem',
    textAlign: 'center'
  },
  modalContent: {
    padding: '10px',
    fontSize: '14px',
    color: '#2c3e50',
    textAlign: 'center'
    //: '70vh'
  },
  modalActions: {
    bottom: '2px',
    marginBottom: '10px',
    width: '100%'
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  closeBtn: {
    marginTop: '10px',
    cursor: 'pointer',
    fontWeight: '500',
    padding: '11px 28px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    border: 'none',
    color: '#fff',
    background: '#ff3e4e',
    transition: 'all 0.25s ease'
  },
  'closeBtn:hover': {
    boxShadow: '0 10px 20px -10px rgba(255, 62, 78, 0.6)',
    transform: 'translateY(-5px)',
    background: '#ff3e4e'
  }
});

const Modal = ({ title, setIsOpen, body }: Modal) => {
  const styles = modalStyles();
  return (
    <>
      <div className={styles.darkBG}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <div className={styles.modalContent}>{body}</div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
