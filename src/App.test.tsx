import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './containers/Root';

test('renders learn react link', () => {
  render(<Root />);
  const linkElement = screen.getByText(/React boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
