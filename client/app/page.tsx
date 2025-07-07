import '@/app/style.scss';
import Header from '@/components/header/Header';
import Central from '@/components/central/Central';
import Logo from '@/components/header/Logo';
import Gallery from '@/components/gallery/Gallery';
import GalleryText from '@/components/gallery/GalleryText';

const Home = () => {
  return (
    <div className="app main">
      <Logo />
      <Header />
      <Central />
      <Gallery />
      <GalleryText/>
    </div>
  );
};
export default Home;
