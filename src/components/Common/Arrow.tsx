import React from 'react'

type Props = {
  wrapperClassName?: string
  vectorImage: string
}

function Arrow({wrapperClassName, vectorImage}: Props) {
  return (
    <div className={`w-[33.33px] h-[33.33px] cursor-pointer relative slide-arror ${wrapperClassName}`}>
      <img srcSet={`${vectorImage} 2x`} alt="vector-left" className='w-full h-full' />
    </div>
  )
}

export default Arrow
