'use client';
import { ProjectFooter, ProjectGallery } from '@/components/project';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkArgs = {
  text: string;
  href: string;
};

const NavLink = ({ text, href }: NavLinkArgs) => {
  const currentRoute = usePathname();
  const active =
    currentRoute.split('/').slice(1, 3).join('/') ===
    href.split('/').slice(1, 3).join('/');
  return (
    <Link
      href={href}
      className={` ${
        active ? 'bg-secondary-light dark:bg-secondary-dark ' : ''
      } text-lg font-medium text-primary-dark dark:text-secondary-light md:flex-shrink px-4 py-2  hover:bg-secondary-light dark:hover:bg-secondary-dark rounded-lg`}
    >
      {text}
    </Link>
  );
};

const ProfileNav = ({ params }: { params: { user: string } }) => {
  const user = params.user;
  const currentRoute = usePathname();
  const project = {
    slug: 'exploratory-data-analysis-python-pandass',
    title: 'Exploratory Data Analysis With Python and Pandas',
    type: 'Guided Project',
    link: 'https://www.kaggle.com/code/solivermazo/exploratory-data-analysis-with-python-and-pandas',
    date: 'July 2023',
    content: {
      about: `Apply practical Exploratory Data Analysis (EDA) techniques on any tabular dataset using Python packages such as Pandas and Numpy.`,
      tags: ['Python', 'Data Analysis', 'Pandas', 'EDA'],
      gallery: [
        '/assets/images/soliver-mazo-data-analysis.png',
        '/assets/images/soliver-mazo-data-analysis.png',
        '/assets/images/soliver-mazo-data-analysis.png',
        '/assets/images/soliver-mazo-data-analysis.png',
        '/assets/images/soliver-mazo-data-analysis.png',
      ],
    },
  };
  return (
    <aside className='flex flex-col md:flex-col gap-3 md:min-w-[25%] mt-1 md:mt-5  '>
      <div className='flex flex-row flex-grow md:flex-col md:flex-grow-0 gap-x-2 gap-y-0 md:rounded-xl md:gap-y-3 screen_padding_x py-2 md:px-2  bg_primary'>
        <NavLink text='Activity' href={`/${user}`} />
        <NavLink text='Projects' href={`/${user}/projects`} />
        <NavLink text='About' href={`/${user}/about`} />
        <NavLink text='Certificates' href={`/${user}/certificates`} />
      </div>
      {currentRoute.split('/').slice(1, 3).join('/') ===
      `/${user}/projects`.split('/').slice(1, 3).join('/') ? (
        <>
          <div className='bg_primary hidden md:flex md:flex-col md:rounded-xl p-2'>
            <ProjectFooter project={project} />
          </div>
          <div className='bg_primary hidden md:flex md:flex-col md:rounded-xl p-2'>
            <ProjectGallery project={project} />
          </div>
        </>
      ) : null}
    </aside>
  );
};

export default ProfileNav;
