'use client';
import '@/components/header/BurgerInfo.style.scss';
import Link from 'next/link';

const BurgerInfo = ({ infoRef }: { infoRef: any }) => {
  const optionList = ['about', 'exhibitions', 'events', 'contact'];
  const element = optionList.map((item) => {
    return (
      <div className="option" key={item}>
        <Link href={`/${item}`}>{item}</Link>
      </div>
    );
  });

  return (
    <div className="burgerInfo" ref={infoRef}>
      <div className="optionContainer">{optionList && element}</div>
      <div className="space"></div>
      <div className="infoContainer">
        <div className="element">
          <div className="title">location:</div>
          <div className="subtitle">140 park pl, ny, usa</div>
        </div>
        <div className="element">
          <div className="title">open hours:</div>
          <div className="subtitle">daily: 10 am - 6 pm</div>
        </div>
      </div>
      <div className="buy">
        buy tickets <span></span>
      </div>
    </div>
  );
};

export default BurgerInfo;
