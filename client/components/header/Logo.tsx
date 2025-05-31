'use client';
import '@/components/header/Logo.style.scss';
import { useState, useEffect, useRef } from 'react';

const Logo = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (currentScroll > 0) {
        setHasScrolled(true);
      }
    };

    const handleResize = () => {
      setHasScrolled(false); 

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 0) {
          setHasScrolled(true);
        }
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) clearTimeout(resizeTimeoutRef.current);
    };
  }, []);

  const isScrolled = scrollY > 120;

  return (
    <div
      className={`logo ${!isScrolled ? 'big' : ''} ${
        hasScrolled ? 'animate' : ''
      }`}
    >
      revix
    </div>
  );
};

export default Logo;
