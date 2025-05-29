import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import {Header} from '@/components/Header';

describe('Header', () => {
  test('renders the heading with correct text', () => {
    render(<Header />);
    expect(screen.getByText('Henlo')).toBeInTheDocument();
  });
});
