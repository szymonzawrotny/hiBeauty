import '@/app/style.scss';
import Header from '@/components/header/Header';
import Central from '@/components/central/Central';
import Logo from '@/components/header/Logo';

const Home = () => {
  return (
    <div className="app main">
      <Logo />
      <Header />
      <Central />
    </div>
  );
};
export default Home;
