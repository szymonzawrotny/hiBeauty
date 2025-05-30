import '@/components/header/Header.style.scss';
import Burger from '@/components/header/Burger';
import InfoElement from './InfoElement';

const Header = () => {
  return (
    <div className="header">
      <InfoElement title="location:" subtitle="140 park pl, ny, usa" />
      <InfoElement title="open hours:" subtitle="daily: 10 am - 6 pm" />
      <Burger />
    </div>
  );
};

export default Header;
