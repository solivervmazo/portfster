import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faClock, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  ProjectObj,
  ProjectSubInfoArgs,
  ProjectTagsArg,
} from '../project.types';

const ProjectTags = ({ text, icon, href }: ProjectTagsArg) => {
  return (
    <div className='flex items-center'>
      {icon ? <FontAwesomeIcon icon={icon} size='1x' /> : null}
      <a
        {...(href ? { href: href, target: '_blank' } : {})}
        className='text_primary font-general-medium ml-2 '
      >
        {text}
      </a>
    </div>
  );
};

const ProjectSubInfo = ({
  text,
  icon,
  href,
  internal,
}: ProjectSubInfoArgs): React.ReactNode => {
  return (
    <div className='flex flex-row items-center gap-1'>
      {icon ? <FontAwesomeIcon icon={icon} size='xs' /> : null}
      {internal && href ? (
        <Link
          className='text_secondary font-general-regular text-sm'
          href={href}
        >
          {text}
        </Link>
      ) : (
        <a
          {...(href ? { href: href, target: '_blank' } : {})}
          className='text_secondary font-general-regular text-sm'
        >
          {text}
        </a>
      )}
    </div>
  );
};

const ProjectHeader = ({ project }: { project: ProjectObj }) => {
  return (
    <>
      <div className='flex flex-col w-full'>
        <div>
          <span className='text_primary font-general-medium text-left text-3xl sm:text-4xl font-bold mt-14 sm:mt-20 mb-7'>
            {project?.title}
          </span>
        </div>
        <div className='flex flex-row items-center justify-start'>
          <ProjectSubInfo text={project?.date ?? ''} icon={faClock} />
        </div>
      </div>
      <div className='flex flex-row gap-0 justify-between'>
        <div className='flex flex-row gap-4 items-center'>
          <ProjectTags text={project?.type ?? ''} icon={faLightbulb} />
          <ProjectTags text='Demo' href={project?.link} icon={faExternalLink} />
          <ProjectTags text='GitHub' href={project?.link} icon={faGithub} />
        </div>
      </div>
    </>
  );
};

export default ProjectHeader;
