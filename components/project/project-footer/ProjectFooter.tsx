'use client';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ProjectObj } from '../project.types';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { sharerLink } from '@/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

type SocialShareObj = {
  key: 'facebook' | 'linkedin' | 'twitter' | 'copy';
  title: string;
  icon: IconDefinition;
};

const socialShares: Array<SocialShareObj> = [
  {
    key: 'linkedin',
    title: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    key: 'facebook',
    title: 'Facebook',
    icon: faFacebook,
  },
  {
    key: 'twitter',
    title: 'Twitter',
    icon: faTwitter,
  },
  {
    key: 'copy',
    title: 'Copy link',
    icon: faCopy,
  },
];

const ProjectFooter = ({ project }: { project: ProjectObj }) => {
  const currentPath = usePathname();
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    setUrl(
      `${window.location.protocol}//${window.location.host}/${currentPath}`,
    );
  }, []);
  return (
    <div className='flex flex-col w-full gap-3 items-center'>
      <div>
        <p className='text_regular font-general-medium text-2xl md:text-xl'>
          Share
        </p>
      </div>
      <div className='flex flex-row items-center justify-center gap-3'>
        {url &&
          socialShares.map((soc) => (
            <a
              href={sharerLink({
                platform: soc.key,
                title: project.title,
                url,
              })}
              target='_blank'
              key={soc.key}
              about={soc.title}
            >
              <FontAwesomeIcon icon={soc.icon} size='xl' />
            </a>
          ))}
      </div>
    </div>
  );
};

export default ProjectFooter;
