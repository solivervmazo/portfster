import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faKaggle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { fa0 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
type SocMedObj = {
  key: string;
  title: string;
  icon: IconDefinition;
  href: string;
};
const socMeds: Array<SocMedObj> = [
  {
    key: 'linkedin',
    title: 'LinkedIn',
    icon: faLinkedin,
    href: 'https://linkedin.com/in/solivervmazo',
  },
  {
    key: 'github',
    title: 'GitHub',
    icon: faGithub,
    href: 'https://github.com/solivervmazo',
  },
  {
    key: 'kaggle',
    title: 'Kaggle',
    icon: faKaggle,
    href: 'https://www.kaggle.com/solivermazo',
  },
];

const ProfileFooter = () => {
  return (
    <div className='flex w-full screen_padding_x mx-auto'>
      <div className='pt-5 w-full sm:pt-10 pb-8 mt-3 border-t-2 border-primary-light dark:border-secondary-dark'>
        <div className='flex flex-col justify-center items-center mb-5 sm:mb-8'>
          <p className='font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5'>
            Follow me
          </p>
          <div className='flex flex-row gap-5'>
            {socMeds.map((soc) => (
              <a
                href={soc.href}
                target='_blank'
                key={soc.key}
                about={soc.title}
              >
                <FontAwesomeIcon icon={soc.icon} size='2x' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFooter;
