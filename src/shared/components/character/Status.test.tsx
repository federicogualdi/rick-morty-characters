import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from './Status';

test('status is shown', () => {
  render(<Status status="Dead" />);
  const element = screen.getByTestId('characteritem-status');
  expect(element).toBeVisible();
});

test('status is containerized', () => {
  render(<Status status="Dead" />);
  const element = screen.getByTestId('characteritem-status');
  expect(element.nodeName).toBe('DIV');
});
