import { screen, render, act, fireEvent } from '@testing-library/react';
import InfoElement from '@/components/header/InfoElement';

describe('Info Element', () => {
  const title = 'title';
  const subtitle = 'subtitle';
  beforeEach(() => {
    render(<InfoElement title={title} subtitle={subtitle} />);
  });

  test('check text in component', () => {
    const element = screen.getByTestId('infoElement');
    expect(element).toHaveTextContent(title)
    expect(element).toHaveTextContent(subtitle);
  });
});
