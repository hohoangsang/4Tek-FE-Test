import { Input } from 'antd';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className='mx-auto max-w-maxWidthSection' id='contactus'>
      <div className='bg-footerBgImage bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col items-start gap-[68px] px-4 py-10 text-white laptop:flex-row laptop:gap-[40px] laptop:px-[230px]'>
          <div className='w-full'>
            <div className='mx-auto w-[163px] laptop:m-0'>
              <div className='mb-10 w-full'>
                <img src='/images/White_logo.png' alt='White-logo' className='ww-full h-full' />
              </div>
              <div className='flex w-full items-center justify-between gap-6'>
                <div className='h-[40px] w-[40px]'>
                  <img
                    srcSet='/images/twitter-outlined.png 2x'
                    alt='twitter-outlined'
                    className='ww-full h-full'
                  />
                </div>
                <div className='h-[40px] w-[40px]'>
                  <img
                    srcSet='/images/facebook-filled.png 2x'
                    alt='facebook-filled'
                    className='ww-full h-full'
                  />
                </div>
                <div className='h-[40px] w-[40px]'>
                  <img
                    srcSet='/images/linkedin-filled.png 2x'
                    alt='linkedin-filled'
                    className='ww-full h-full'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='flex flex-col gap-5 laptop:gap-10'>
              <div className='font-primaryBold text-[24px] leading-[30px]'>
                {t('footer.address')}
              </div>
              <div className='flex justify-start gap-2'>
                <div className='h-10 w-10 shrink-0'>
                  <img srcSet='/images/location.png 2x' alt='location' className='h-full w-full' />
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='footerParagraph'>{t('footer.address us')}</p>
                  <p className='footerParagraph'>{t('footer.address vietnam')}</p>
                </div>
              </div>
              <div className='flex items-center justify-start gap-2'>
                <div className='h-10 w-10 shrink-0'>
                  <img srcSet='/images/mobile.png 2x' alt='mobile' className='h-full w-full' />
                </div>
                <div>
                  <p className='footerParagraph flex justify-start gap-2'>
                    <span>(+1) 555-0108-000</span>
                    <span>{t('or')}</span>
                    <span>(+236) 555-0108</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='flex flex-col gap-5 laptop:gap-10'>
              <div className='font-primaryBold text-[24px] leading-[30px]'>
                {t('footer.subscribe')}
              </div>
              <p className='footerParagraph'>{t('footer.content subscribe')}</p>
              <div className='input-footer'>
                <Input
                  placeholder={t('your email')}
                  className='footerParagraph rounded-[8px] border-white bg-transparent px-[14px] py-[18px]'
                  suffix={
                    <img srcSet='/images/arrow-right.png 2x' alt='send' className='h-full w-full' />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-black py-[30px] text-center text-white'>2017 Copyright. Policy.</div>
    </footer>
  );
}

export default Footer;
