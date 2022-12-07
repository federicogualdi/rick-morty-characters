import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('header contain text', () => {
  render(<Header />);
  const element = screen.getByTestId('header-title');
  expect(element.textContent).toEqual(expect.stringMatching(/'Rick And Morty' characters/i));
});
