import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '@/components/header/Logo';

describe('Header', () => {
  let logoElement: HTMLElement;
  beforeEach(() => {
    render(<Logo />);

    logoElement = screen.getByText('revix');
  });

  test('renders the heading with correct text', () => {
    expect(logoElement).toBeInTheDocument();
  });

  test('renders correct class for Logo', () => {
    expect(logoElement.parentElement).toHaveClass('logo');
  });

  test('has class "big" when not scrolled', () => {
    expect(logoElement.parentElement).toHaveClass('big');
  });

  test('adds "animate" class when scrolled', async () => {
    await act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
      return Promise.resolve();
    });

    logoElement = screen.getByText('revix').parentElement!;
    expect(logoElement).toHaveClass('animate');
  });

  test('remove "big" when scrolled over 300px', async () => {
    await act(() => {
      window.scrollY = 350;
      window.dispatchEvent(new Event('scroll'));
      return Promise.resolve();
    });

    logoElement = screen.getByText('revix').parentElement!;
    expect(logoElement).not.toHaveClass('big');
  });

  test('toggles animate class after resize and delay', async () => {
    await act(() => {
      window.scrollY = 400;
      window.dispatchEvent(new Event('scroll'));
      return Promise.resolve();
    });
    const logo = screen.getByText('revix').parentElement!;

    await act(() => {
      window.dispatchEvent(new Event('resize'));
      return Promise.resolve();
    });

    expect(logo).not.toHaveClass('animate');

    await waitFor(
      () => {
        expect(logo).toHaveClass('animate');
      },
      { timeout: 500 }
    );
  });

  test('has "big" and not "animate" when scrollY is 0', async () => {
    await act(()=>{
      window.scrollY = 0;
      window.dispatchEvent(new Event('scroll'));
      return Promise.resolve();
    })

    logoElement = screen.getByText('revix').parentElement!;
    expect(logoElement).not.toHaveClass("animate");
    expect(logoElement).toHaveClass("big")
  });
});
