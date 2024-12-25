import classNames from 'classnames';
import { Game } from '~/@types/game.type';

type Props = {
  game: Game;
  index: number;
};

function GameItem({ game, index }: Props) {
  return (
    <div
      key={game.id}
      className={classNames(
        `relative h-[80vw] cursor-pointer rounded-[20px] px-2 py-3 shadow-custom tablet:h-[45vw] laptop:h-[35vw]`,
        {
          'mt-8': index % 2 === 1
        }
      )}
    >
      <img
        src={game.image}
        alt={game.title}
        className='hover:scale-110 absolute left-0 top-0 h-full w-full overflow-hidden rounded-[20px] object-cover transition-all duration-300 hover:rounded-none'
      />
      <div className='absolute bottom-3 left-2 right-2 z-10 tablet:bottom-10 tablet:left-8 tablet:right-8'>
        <h3 className='mb-[3px] font-primaryBold text-[24px] leading-[30px] hover:underline'>
          {game.title}
        </h3>
        <p className='text-[12px] leading-[15px] tracking-[.9px]'>{game.description}</p>
      </div>
    </div>
  );
}

export default GameItem;
