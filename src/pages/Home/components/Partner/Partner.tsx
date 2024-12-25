import { useTranslation } from 'react-i18next';
import Slider, { Settings } from 'react-slick';
import Arrow from '~/components/Common/Arrow';

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className='absolute left-4 top-1/2 z-10 -translate-y-1/2 laptop:-left-[33.33px]'
    >
      <Arrow vectorImage='/images/Vector-left.png' />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className='absolute right-4 top-1/2 z-10 -translate-y-1/2 laptop:-right-[33.33px]'
    >
      <Arrow vectorImage='/images/Vector-right.png' />
    </div>
  );
};

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '80px'
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10px'
      }
    }
  ]
};

const partners = [
  {
    id: 1,
    name: 'Partner 1',
    image: '/images/ea-games.png'
  },
  {
    id: 2,
    name: 'Partner 2',
    image: '/images/game.png'
  },
  {
    id: 3,
    name: 'Partner 3',
    image: '/images/first-power-up.png'
  },
  {
    id: 4,
    name: 'Partner 4',
    image: '/images/disney.png'
  },
  {
    id: 5,
    name: 'Partner 5',
    image: '/images/bookpro.png'
  },
  {
    id: 6,
    name: 'Partner 6',
    image: '/images/sega.png'
  },
  {
    id: 7,
    name: 'Partner 7',
    image: '/images/2k.png'
  }
];

function Partner() {
  const { t } = useTranslation(['home']);

  return (
    <section
      className='mx-auto max-w-maxWidthSection bg-[#F6F6F6] py-10 laptop:px-[230px] laptop:py-[120px]'
      id='partners'
    >
      <h2 className='sectionTitle mb-10 text-center tablet:mb-20'>{t('our partners')}</h2>

      <div className='relative'>
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className='h-[72px] w-[188px]'>
              <img
                src={partner.image}
                alt={partner.name}
                className='h-full w-full object-contain'
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Partner;
