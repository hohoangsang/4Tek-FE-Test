import classNames from 'classnames';
import { useEffect, useState } from 'react';
import AboutUs from '~/pages/Home/components/AboutUs/AboutUs';
import Footer from '~/components/Footer/Footer';
import Games from '~/pages/Home/components/Games/Games';
import Header from '~/components/Header/Header';
import Hero from '~/pages/Home/components/Hero/Hero';
import Partner from '~/pages/Home/components/Partner/Partner';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='relative'>
      <div className='hero-section' id='home'>
        <Header />
        <Hero />

        {/* Ông tiên - desktop */}
        <div className='absolute -bottom-[35px] -left-[90px] z-10 -mt-[70px] hidden overflow-hidden desktop:block desktop:h-[938px] desktop:w-[938px]'>
          <img srcSet='/images/ong-tien.png 2x' alt='fairy' className='h-full w-full' />
        </div>
      </div>

      {/* Ông tiên - mobile */}
      <div className='relative z-20 -mt-[70px] flex items-center justify-center overflow-hidden desktop:hidden'>
        <img srcSet='/images/Fairy.png 2x' alt='fairy' />
      </div>

      <div className='h-[48px] laptop:h-[128px]'></div>

      <AboutUs />
      <Games />
      <Partner />
      <Footer />

      <div className='fixed bottom-4 right-4 z-30 laptop:bottom-10 laptop:right-20'>
        <a href='#home'>
          <div className='rounded-full bg-white px-5 py-[26px] shadow-custom'>
            <img
              srcSet='/images/arrow-down.png 2x'
              alt='arrow'
              className={classNames('w-[30px] transition-transform duration-300', {
                'rotate-180': isScrolled
              })}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
