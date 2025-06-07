'use client';
import { useRef } from 'react';
import '@/components/header/Burger.style.scss';

const Burger = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="burger"
      onClick={() => {
        if (ref.current) ref.current.classList.toggle('active');
      }}
      ref={ref}
    >
      <span className="up"></span>
      <span className="down"></span>
    </div>
  );
};

export default Burger;
