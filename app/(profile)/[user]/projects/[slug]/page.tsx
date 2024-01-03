'use client';

import {
  ProjectObj,
  ProjectHeader,
  ProjectSubheader,
  ProjectFooter,
  ProjectGallery,
  ProjectMarkdown,
} from '@/components/project';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';

type ProjectRouteParams = {
  user: string;
  slug: string;
};

function Project({ params }: { params: ProjectRouteParams }) {
  const [project, setProject] = useState<ProjectObj>();
  useEffect(() => {
    const fetchProject = (): void => {
      setProject({
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
      });
    };
    fetchProject();
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg_primary flex flex-col justify-start gap-3 py-3 px-4 md:rounded-lg'>
        {project ? <ProjectHeader project={project} /> : null}
      </div>
      {project ? (
        <div className='bg_primary flex flex-col md:flex-row justify-start gap-3 py-3 px-4 md:rounded-lg'>
          <ProjectSubheader project={project} />
        </div>
      ) : null}
      {project &&
      project.content.gallery &&
      project.content.gallery?.length > 0 ? (
        <div className='bg_primary flex flex-col min-h-32 justify-start md:hidden gap-3 py-3 px-4 md:rounded-lg'>
          {/* Project Gallery */}
          <ProjectGallery project={project} />
        </div>
      ) : null}
      {project ? (
        <div className='bg_primary flex flex-col md:flex-row justify-start gap-3 py-3 px-4 md:rounded-lg'>
          {/* content */}
          <ProjectMarkdown project={project} />
        </div>
      ) : null}
      {project ? (
        <div className='bg_primary flex flex-col md:flex-row justify-start md:hidden gap-3 py-3 px-4 md:rounded-lg'>
          {/* footer */}
          <ProjectFooter project={project} />
        </div>
      ) : null}
    </div>
  );
}

export default Project;
