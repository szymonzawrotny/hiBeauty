import { screen, render } from '@testing-library/react';
import GalleryText from '@/components/gallery/GalleryText';

describe('Gallery Text', () => {
  let galleryTextElement: HTMLDivElement;

  beforeEach(() => {
    render(<GalleryText />);

    galleryTextElement = screen.getByTestId('galleryText');
  });

  it('render correctly', () => {
    expect(galleryTextElement).toBeInTheDocument();
  });
});
