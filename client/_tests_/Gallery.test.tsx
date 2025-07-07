import { screen, render } from '@testing-library/react';
import Gallery from '@/components/gallery/Gallery';

describe('Gallery', () => {
  let galleryElement: HTMLDivElement;

  beforeEach(() => {
    render(<Gallery />);

    galleryElement = screen.getByTestId('gallery');
  });

  it('render correctly',()=>{
    expect(galleryElement).toBeInTheDocument();
  })
});
