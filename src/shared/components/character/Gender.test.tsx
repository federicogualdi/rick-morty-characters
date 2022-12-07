import React from 'react';
import { render, screen } from '@testing-library/react';
import Gender from './Gender';

test('gender is shown', () => {
  render(<Gender gender="Female" />);
  const element = screen.getByTestId('characteritem-gender');
  expect(element).toBeVisible();
});

test('gender is containerized', () => {
  render(<Gender gender="Female" />);
  const element = screen.getByTestId('characteritem-gender');
  expect(element.nodeName).toBe('DIV');
});
