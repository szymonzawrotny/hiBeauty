import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/header/Header';

describe('Header', () => {
  test('renders the heading with correct text', () => {
    render(<Header />);
    expect(screen.getByText('halko')).toBeInTheDocument();
  });
});
