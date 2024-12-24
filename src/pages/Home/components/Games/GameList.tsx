import React, { Fragment } from 'react';
import { games } from './data';
import GameItem from './GameItem';

type Props = {};

function GameList({}: Props) {
  return (
    <Fragment>
      <div className='grid grid-cols-2 laptop:grid-cols-4 gap-x-4 gap-y-5 tablet:gap-10 text-white'>
        {games.map((game, index) => (
          <GameItem key={game.id} game={game} index={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default GameList;
