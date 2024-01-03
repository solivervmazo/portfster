import React from 'react';
import { ProjectObj } from '../project.types';

function ProjectSubheader({ project }: { project: ProjectObj }) {
  return (
    <div className='flex flex-col gap-3 w-full'>
      {/* About */}
      {project.content?.about ? (
        <div>
          <p className='text_regular font-general-medium text-2xl'>About</p>
          <p className='text_regular font-general-regular'>
            {project.content?.about}
          </p>
        </div>
      ) : null}
      {/* Tools and Technology */}
      {project.content?.about ? (
        <div>
          <p className='text_regular font-general-medium text-2xl'>
            Tools & Technologies
          </p>
          <p className='text_regular font-general-regular'>
            {project.content?.tags?.join(', ')}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectSubheader;
