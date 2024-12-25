type Props = {
  wrapperClassName?: string;
  vectorImage: string;
};

function Arrow({ wrapperClassName, vectorImage }: Props) {
  return (
    <div
      className={`slide-arror relative h-[33.33px] w-[33.33px] cursor-pointer ${wrapperClassName}`}
    >
      <img srcSet={`${vectorImage} 2x`} alt='vector-left' className='h-full w-full' />
    </div>
  );
}

export default Arrow;
