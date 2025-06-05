import '@/components/central/Central.style.scss';
import Image from 'next/image';

const Central = () => {
  return (
    <div className="central">
      <div className="photos">
        <div className="leftPhoto">
          <Image
            src="/images/left.jpg"
            alt="Opis zdjęcia"
            className="left"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="rightPhoto">
          <Image
            src="/images/right.jpg"
            alt="Opis zdjęcia"
            className="left"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <section>
        <span className="title">
          a space for
          <br /> bold art and new ideas
        </span>
        <div className="swipercontainer">
          <div className="options">
            <div className="swiperTitle">popular now</div>
            <div className="arrows"></div>
          </div>
          <div className="swiper">
            <Image
              src="/images/third.jpg"
              alt="Opis zdjęcia"
              className="left"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Central;
