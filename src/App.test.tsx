import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
