import { Fragment } from 'react';
import { games } from './data';
import GameItem from './GameItem';

function GameList() {
  return (
    <Fragment>
      <div className='grid grid-cols-2 gap-x-4 gap-y-5 text-white tablet:gap-10 laptop:grid-cols-4'>
        {games.map((game, index) => (
          <GameItem key={game.id} game={game} index={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default GameList;
