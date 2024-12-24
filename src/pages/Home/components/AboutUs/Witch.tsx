import React from 'react';

function Witch() {
  return (
    <div className='relative'>
      <div className='flex items-center justify-center mt-10'>
        <img srcSet="/images/witch-girl.png 2x" alt="witch-girl" className='witch max-w-[300px] desktop:max-w-[540px]' />
      </div>
      <div className='flex justify-center'>
        <img srcSet='/images/Pin-map.png 2x' alt='pin-map'/>
      </div>
    </div>
  );
}

export default Witch;
