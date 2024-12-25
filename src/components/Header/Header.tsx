import React, { Dispatch, SetStateAction } from 'react';
import Popover from '../Popover/Popover';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';

type KeyLang = keyof typeof locales;

export const menus = [
  {
    id: 1,
    title: 'about us',
    link: '#aboutus'
  },
  {
    id: 2,
    title: 'games',
    link: '#games'
  },
  {
    id: 3,
    title: 'partners',
    link: '#partners'
  },
  {
    id: 4,
    title: 'contact us',
    link: '#contactus'
  }
];

interface HeaderProps{
  setIsClickMenuMobile: Dispatch<SetStateAction<boolean>>
}

function Header({setIsClickMenuMobile}: HeaderProps) {
  const { i18n, t } = useTranslation(['common']);
  const keyLanguage = i18n.language as KeyLang;

  const changeLanguage = (lng: KeyLang) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='relative z-10 bg-transparent'>
      <div className='flex items-center justify-between px-4 py-6 laptop:px-20 laptop:pb-20'>
        <div className='logo w-[68px] flex-shrink-0 laptop:w-[110px]'>
          <img srcSet='/images/White_logo.png 2x' alt='4Tek' className='h-auto w-full' />
        </div>

        <div className='hidden items-center gap-x-[84px] laptop:flex'>
          {menus.map((menu) => (
            <a
              href={menu.link}
              key={menu.id}
              className='font-primaryBold text-[14px] leading-[17.5px] text-white hover:underline'
            >
              {t(`header.${menu.title}`)}
            </a>
          ))}

          <Popover
            renderPopover={
              <div className='flex w-[160px] flex-col p-2'>
                <div onClick={() => changeLanguage('vi')} className='flex items-center gap-2'>
                  <div className='w-[24px]'>
                    {keyLanguage === 'vi' && (
                      <img srcSet='/images/tick.png 2x' alt='tick' className='w-full' />
                    )}
                  </div>
                  <div className='w-[33.33px]'>
                    <img src='/images/vietnamese.png' alt='your email' className='w-full' />
                  </div>
                  <p className='font-primaryBold text-[10px] leading-[17.5px] text-black'>
                    {t('header.vietnamese')}
                  </p>
                </div>
                <div className='h-[1px] w-full bg-[#C4C4C4]' />
                <div onClick={() => changeLanguage('en')} className='flex items-center gap-2'>
                  <div className='w-[24px]'>
                    {keyLanguage === 'en' && (
                      <img srcSet='/images/tick.png 2x' alt='tick' className='w-full' />
                    )}
                  </div>
                  <div className='w-[33.33px]'>
                    <img src='/images/us.png' alt='us' className='w-full' />
                  </div>
                  <p className='font-primaryBold text-[10px] leading-[17.5px] text-black'>
                    {t('header.english')}
                  </p>
                </div>
              </div>
            }
            className='flex cursor-pointer items-center text-sm text-white hover:text-gray-300'
          >
            <div className='mr-3 w-[33.33px]'>
              {keyLanguage === 'en' && <img src='/images/us.png' alt='us' className='w-full' />}
              {keyLanguage === 'vi' && (
                <img src='/images/vietnamese.png' alt='vietnamese' className='w-full' />
              )}
            </div>

            <svg
              fill='#ffffff'
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              className='h-[10px] w-[20px]'
              viewBox='0 0 96.154 96.154'
              xmlSpace='preserve'
              stroke='#ffffff'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <g>
                  {' '}
                  <path d='M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61 c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056 c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z'></path>{' '}
                </g>{' '}
              </g>
            </svg>
          </Popover>
        </div>

        <div className='laptop:hidden cursor-pointer' onClick={() => setIsClickMenuMobile(true)}>
          <img srcSet='/images/menu.png 2x' alt='menu icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
