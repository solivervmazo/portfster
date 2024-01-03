import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProjectCard() {
  return (
    <div className='bg_primary flex flex-col overflow-hidden sm:flex-row md:rounded-lg'>
      {/* project image */}
      <Link href={'/soliver/projects/1'}>
        <div className='relative min-w-48 h-32'>
          <Image
            className='object-cover'
            src={'/assets/images/soliver-mazo-data-analysis.png'}
            alt={'project_cover'}
            fill
          />
        </div>
      </Link>
      {/* project info */}
      <div className='flex flex-col flex-grow h-32 p-3'>
        <Link href={'/soliver/projects/1'}>
          <h1 className='text_primary font-general-semibold text-xl'>Title</h1>
        </Link>
        <span className={'text_primary pt-0 px-1'}>
          #Python #Data Analysis #Pandas #EDA
        </span>
        {/* description */}
        <div className='flex-grow'></div>
        {/* Footer */}
        <div className='flex-shrink flex flex-row justify-between items-center font-general-medium pt-0 px-1 text-sm text-ternary-dark dark:text-ternary-light'>
          <div className='flex flex-row gap-1 items-center'>
            <FontAwesomeIcon icon={faClock} size='sm' />
            <span
              className={'text_secondary font-general-medium pt-0 px-1 text-xs'}
            >
              Jan 23, 2022
            </span>
          </div>
          <span
            className={'text_secondary font-general-medium pt-0 px-1 text-xs'}
          >
            Guided Project
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
