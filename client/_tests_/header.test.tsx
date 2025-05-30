import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/header/Header';

describe('Header', () => {
  test('renders the heading with correct text', () => {
    render(<Header />);

    const headerElement = screen.getByText('revix');
    expect(headerElement).toBeInTheDocument();
  });
  test('renders the heading with correct class', () => {
    render(<Header />);

    const headerElement = screen.getByText('revix');
    expect(headerElement).toHaveClass('logo');
  });
});
