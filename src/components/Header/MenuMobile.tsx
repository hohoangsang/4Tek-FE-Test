import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import Popover from '../Popover/Popover';
import { menus } from './Header';

interface MenuMobileProps {
  isClickMenuMobile: boolean;
  setIsClickMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

type KeyLang = keyof typeof locales;

function MenuMobile({ isClickMenuMobile, setIsClickMenuMobile }: MenuMobileProps) {
  const { i18n, t } = useTranslation(['common']);
  const keyLanguage = i18n.language as KeyLang;
  const changeLanguage = (lng: KeyLang) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className={classNames(
        'lef-0 absolute right-0 z-50 w-full bg-white px-4 py-12 transition-all duration-300',
        {
          'top-0 h-[1000px]': isClickMenuMobile,
          '-top-full h-0': !isClickMenuMobile
        }
      )}
    >
      <div className='mb-10 flex items-center justify-between'>
        <div>
          <Popover
            renderPopover={
              <div className='flex w-[100px] flex-col p-2'>
                <div onClick={() => changeLanguage('vi')} className='flex items-center gap-2'>
                  <div className='w-[24px]'>
                    {keyLanguage === 'vi' && (
                      <img srcSet='/images/tick.png 2x' alt='tick' className='w-full' />
                    )}
                  </div>
                  <div className='w-[33.33px]'>
                    <img src='/images/vietnamese.png' alt='your email' className='w-full' />
                  </div>
                  {/* <p className='font-primaryBold text-[10px] leading-[17.5px] text-black'>
                  {t('header.vietnamese')}
                </p> */}
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
                  {/* <p className='font-primaryBold text-[10px] leading-[17.5px] text-black'>
                  {t('header.english')}
                </p> */}
                </div>
              </div>
            }
            className='flex cursor-pointer items-center text-sm text-white hover:text-gray-300'
          >
            <div className='flex items-center rounded-[8px] border-[#AFAFAF] bg-[#F6F6F6] px-3 py-2'>
              <div className='mr-1 w-[26.67px]'>
                {keyLanguage === 'en' && <img src='/images/us.png' alt='us' className='w-full' />}
                {keyLanguage === 'vi' && (
                  <img src='/images/vietnamese.png' alt='vietnamese' className='w-full' />
                )}
              </div>

              <svg
                fill='#000'
                version='1.1'
                id='Capa_1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className='h-[10px] w-[20px]'
                viewBox='0 0 96.154 96.154'
                xmlSpace='preserve'
                stroke='#000'
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
            </div>
          </Popover>
        </div>

        <div className='cursor-pointer laptop:hidden' onClick={() => setIsClickMenuMobile(false)}>
          <img srcSet='/images/menu-close.png 2x' alt='menu icon' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        {menus.map((menu, index) => (
          <a
            href={menu.link}
            key={menu.id}
            onClick={() => {
              setTimeout(() => {
                setIsClickMenuMobile(false);
              }, 500);
            }}
            className={classNames(
              'w-full py-6 text-center font-primaryBold text-[14px] leading-[17.5px] text-black hover:underline',
              {
                'border-b-[1px] border-[#EEEEEE]': index !== menus.length - 1
              }
            )}
          >
            {t(`header.${menu.title}`)}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MenuMobile;
