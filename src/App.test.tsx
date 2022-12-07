import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and app title', () => {
  render(<App />);
  const appTitleElement = screen.getByText(/'Rick And Morty' characters/i);
  expect(appTitleElement).toBeInTheDocument();
});
