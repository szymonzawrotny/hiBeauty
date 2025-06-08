'use client';
import { useRef } from 'react';
import BurgerInfo from '@/components/header/BurgerInfo';
import '@/components/header/Burger.style.scss';

const Burger = () => {
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const handleBurger = () => {
    if (burgerRef.current && infoRef.current) {
      burgerRef.current.classList.toggle('active');
      infoRef.current.classList.toggle('active');
    }
  };

  return (
    <>
      <div className="burger" onClick={handleBurger} ref={burgerRef}>
        <span className="up"></span>
        <span className="down"></span>
      </div>
      <BurgerInfo infoRef={infoRef}/>
    </>
  );
};

export default Burger;
