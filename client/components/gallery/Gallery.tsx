'use client';
import Image from 'next/image';
import GalleryText from '@/components/gallery/GalleryText';
import '@/components/gallery/Gallery.style.scss';

const Gallery = () => {
  return (
    <div className="gallery" data-testid="gallery">
      <div className="imageContainer">
        <Image
          src={'/images/floor.jpg'}
          width={640}
          height={800}
          alt="pan stoi na podłodze z drewna"
        />
      </div>

      <div className="imageContainer">
        <Image
          src={'/images/flower.jpeg'}
          width={640}
          height={640}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/hall.webp'}
          width={450}
          height={490}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/wystawa2.jpeg'}
          width={620}
          height={800}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/frame2.jpg'}
          width={640}
          height={700}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/six.webp'}
          width={820}
          height={800}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/seven.webp'}
          width={620}
          height={800}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/flower.jpeg'}
          width={640}
          height={640}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      <div className="imageContainer">
        <Image
          src={'/images/down.webp'}
          width={1600}
          height={1000}
          alt="pan stoi na podłodze z drewna"
        />
      </div>
      {/* <GalleryText /> */}
    </div>
  );
};

export default Gallery;
