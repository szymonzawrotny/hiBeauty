'use client';
import '@/components/header/Logo.style.scss';
import { useState, useEffect } from 'react';

const Logo = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={`logo ${scrollY > 120 ? '' : 'big'}`}>revix</div>;
};

export default Logo;
