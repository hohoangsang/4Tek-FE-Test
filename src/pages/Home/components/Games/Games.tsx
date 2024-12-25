import { useTranslation } from 'react-i18next';
import GameList from './GameList';

function Games() {
  const { t } = useTranslation(['home']);

  return (
    <section className='mx-auto my-12 max-w-maxWidthSection px-4 laptop:my-[128px]' id='games'>
      <h2 className='sectionTitle section-title text-center'>{t('our games.title')}</h2>

      <p className='mx-auto my-4 max-w-[860px] text-center text-[14px] leading-[19.6px] text-[#757575] tablet:mt-6'>
        {t('our games.content')}
      </p>

      <GameList />
    </section>
  );
}

export default Games;
