import { screen, render, fireEvent } from '@testing-library/react';
import Burger from '@/components/header/Burger';

describe('Burger', () => {
  let burgerElement: HTMLDivElement;
  beforeEach(() => {
    render(<Burger />);

    burgerElement = screen.getByTestId('burger');
  });

  test('burger has a correct class', () => {
    expect(burgerElement).toHaveClass('burger');
    expect(burgerElement).not.toHaveClass('active');
  });

  test('correct class after click', async () => {
    expect(burgerElement).not.toHaveClass('active');
    fireEvent.click(burgerElement);
    expect(burgerElement).toHaveClass('active');
  });
});
