'use client';
import { useEffect, useRef } from 'react';
import '@/components/gallery/GalleryText.style.scss';

const GalleryText = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  const checkIsMobile = () => {
    const isCurrentlyMobile = window.innerWidth <= 780; // popraw bo na 1020 też się zmienia wysokość i się rozjeżdża
    isMobileRef.current = isCurrentlyMobile;
  };

  const handleScroll = () => {
    const windowHeight = window.outerHeight;
    const galleryTextHeight = ref.current?.clientHeight! / 2;

    let topDistance = 1500 - windowHeight / 2 + galleryTextHeight;

    if (isMobileRef.current) {
      topDistance = 2250 - windowHeight / 2 + galleryTextHeight;
    }

    const gallery = document.querySelector('.gallery')?.clientHeight ?? 0;

    const topHeight = isMobileRef.current ? 1100 : 275;

    if (ref.current) {
      if (scrollY >= topDistance && scrollY < gallery + topHeight) {
        ref.current.classList.add('sticky');
        ref.current.classList.remove('afterScroll');
        ref.current.style.top = '';
      } else if (scrollY >= gallery + topHeight) {
        ref.current.classList.remove('sticky');
        ref.current.classList.add('afterScroll');

        if (isMobileRef.current) {
          ref.current.style.top = `${gallery + 1400}px`;
        } else {
          ref.current.style.top = `${gallery + 595}px`; 
        }
      } else {
        ref.current.classList.remove('sticky');
        ref.current.classList.remove('afterScroll');
        ref.current.style.top = '';
      }
    }
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="galleryText" ref={ref} data-testid="galleryText">
      revix showcases bold contemporary art that inspires, challenges and
      redefines perspectives
    </div>
  );
};

export default GalleryText;
