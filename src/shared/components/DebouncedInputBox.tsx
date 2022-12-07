import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import useDebounce from '../utils/Debounce.utils';
import InputBox from './InputBox';

type DebouncedInputBox = {
  needStickStyle: boolean;
  setDebouncedValue: (value: string) => void;
};

const debouncedInputBoxStyles = createUseStyles({
  inputBox: {
    position: 'sticky',
    top: '1rem',
    zIndex: 10
  }
});

const DebouncedInputBox = ({ needStickStyle, setDebouncedValue }: DebouncedInputBox) => {
  const [value, setvalue] = useState<string>();

  useDebounce(() => setDebouncedValue(value ?? ''), [value], 250);

  const styles = debouncedInputBoxStyles();
  return (
    <InputBox className={needStickStyle ? styles.inputBox : ''} onChange={setvalue}></InputBox>
  );
};

export default DebouncedInputBox;
