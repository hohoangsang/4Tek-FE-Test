import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Witch from './Witch';

const aboutData = [
  {
    id: 1,
    key: 'access 24/7',
    title: '24 - Hour',
    content: "24/7 access ensures operators' businesses runs smoothly all year long.",
    icon: '/images/calendar-tick.png'
  },
  {
    id: 2,
    key: 'design',
    title: 'Design',
    content:
      'Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.',
    icon: '/images/pen-tool.png'
  },
  {
    id: 3,
    key: 'team',
    title: 'Team',
    content:
      'Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.',
    icon: '/images/people.png'
  }
];

function AboutUs() {
  const { t } = useTranslation(['home', 'common']);

  return (
    <Fragment>
      <div className='dessktop:h-[128px] h-[48px]' />
      <section
        className='max-w-maxWidthSectionx mx-auto desktop:px-[200px] extraLarge:px-[380px]'
        id='aboutus'
      >
        <div className='grid grid-cols-1 laptop:grid-cols-2 laptop:px-[200] desktop:gap-[40px] desktop:px-[380]'>
          <div className='relative px-4 pb-[40px] laptop:px-0 laptop:pb-0'>
            <h2 className='sectionTitle'>{t('about us.title')}</h2>
            <p className='commonParagraph my-8 desktop:mt-10'>{t('about us.content')}</p>

            <div className='grid grid-cols-2 gap-4 desktop:absolute desktop:bottom-0 desktop:left-0 desktop:right-0 desktop:grid-cols-1 desktop:gap-10'>
              <div className='font-primaryBold'>
                <div className='text-[#079BEE]'>
                  <span className='text-[44px] leading-[53.64px] desktop:text-[80px] desktop:leading-[97.52px]'>
                    600
                  </span>
                  <span className='text-[20px] leading-[24.38px] desktop:text-[40px] desktop:leading-[48.75px]'>
                    M
                  </span>
                  <span className='mb-[2px] text-[36px] leading-[43.88px] desktop:text-[56px] desktop:leading-[90px]'>
                    +
                  </span>
                </div>
                <p className='mt-1 text-[24px] leading-[30px]'>{t('users', { ns: 'common' })}</p>
              </div>
              <div className='font-primaryBold'>
                <div className='text-[#079BEE]'>
                  <span className='text-[44px] leading-[53.64px] desktop:text-[80px] desktop:leading-[97.52px]'>
                    135
                  </span>
                  <span className='mb-[2px] text-[36px] leading-[43.88px] desktop:text-[56px] desktop:leading-[90px]'>
                    +
                  </span>
                </div>
                <p className='mt-1 text-[24px] leading-[30px]'>{t('games', { ns: 'common' })}</p>
              </div>
            </div>
          </div>

          <div className='bg-[#F6F6F6] px-4 py-10 desktop:px-[75px] desktop:py-[113px]'>
            <div className='flex flex-col gap-10'>
              {aboutData.map((data) => (
                <div className='flex gap-5' key={data.id}>
                  <div className='h-[40px] w-[40px] flex-shrink-0 rounded-full bg-[#E3FCFF] p-[12px] laptop:h-[45px] laptop:w-[45px]'>
                    <img src={data.icon} alt={data.title} className='h-full w-full' />
                  </div>
                  <div>
                    <h3 className='font-primaryBold text-[24px] leading-[30px]'>
                      {t(`${data.key}.title`)}
                    </h3>
                    <p className='commonParagraph mt-3'>{t(`${data.key}.content`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Witch />
      </section>
    </Fragment>
  );
}

export default AboutUs;
