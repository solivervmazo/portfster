import Image from 'next/image';
const ProfileBanner = () => {
  return (
    <>
      <Image
        className='fixed top-0 w-full h-56 max-h-56 mt-14 object-cover'
        src={'/assets/images/soliver-mazo-data-analysis.png'}
        fill
        alt='portfolio_banner'
      />
      <div className='flex flex-col justify-center relative min-h-56  w-full'>
        <div className='flex-grow h-56 flex flex-col  max-w-screen-lg mx-auto screen_padding_x w-full'>
          {/* Banner left contents */}
          <div className='flex-grow flex flex-col justify-center text-right'>
            <h1 className='font-general-semibold text-3xl md:text-3xl xl:text-4xl text-primary-light uppercase'>
              Hi, I'm Soliver
            </h1>
            <p className='font-general-medium mt-2 text-lg sm:text-xl  xl:text-2xl leading-none text-gray-200'>
              Aspiring Data Analyst
            </p>
          </div>
          <div className='typewriter container flex flex-col mx-auto sm:justify-end sm:flex-row mb-8 sm:mb-8'>
            <p className='font-general-medium mt-2 text-right py-1 text-md sm:text-lg  xl:text-2xl leading-tight text-gray-100  bg-primary-dark px-2'>
              SQL • PYTHON • TABLEAU • GOOGLE SHEETS
              <span className='px-1 typer_end'>.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
