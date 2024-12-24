import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation(['home', 'common']);
  return (
    <div className='relative z-20 px-4 pb-20 pt-6 laptop:pb-[172px] laptop:pt-[132px]'>
      <div className='mx-auto laptop:max-w-[860px]'>
        <h2 className='heroTitle flex flex-col items-center justify-center text-center laptop:flex-row laptop:gap-4'>
          <span>{t('hero.title.we')}</span>
          <span>{t('hero.title.ready')}</span>
        </h2>

        <div className='my-10 flex justify-between rounded-[21px] bg-white px-[26px] py-6 laptop:mx-[50px] laptop:px-10'>
          <div>
            <span className='sectionTitle'>30</span>
            <p className='mt-2 text-center font-primaryBold'>{t('days', { ns: 'common' })}</p>
          </div>
          <div className='sectionTitle'>:</div>
          <div>
            <span className='sectionTitle'>18</span>
            <p className='mt-2 text-center font-primaryBold'>{t('hours', { ns: 'common' })}</p>
          </div>
          <div className='sectionTitle'>:</div>
          <div>
            <span className='sectionTitle'>20</span>
            <p className='mt-2 text-center font-primaryBold'>{t('minutes', { ns: 'common' })}</p>
          </div>
          <div className='sectionTitle'>:</div>
          <div>
            <span className='sectionTitle'>11</span>
            <p className='mt-2 text-center font-primaryBold'>{t('seconds', { ns: 'common' })}</p>
          </div>
        </div>

        <div className='mx-auto mb-4 laptop:mb-8 laptop:mt-[100px] laptop:max-w-[560px]'>
          <p className='text-center text-[12px] leading-[15px] text-white laptop:text-[18px] laptop:leading-[22.68px]'>
            {t('hero.content')}
          </p>
        </div>

        <div className='input-hero mx-auto laptop:max-w-[560px]'>
          <Input
            placeholder={t('your email', { ns: 'common' })}
            className='rounded-[8px] border-white px-[14px] py-[18px]'
            suffix={
              <img srcSet='/images/arrow-right-black.png 2x' alt='send' className='h-full w-full' />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
