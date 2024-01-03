'use client';
import Image from 'next/image';
import { ProjectObj } from '../project.types';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ProjectGallery = ({ project }: { project: ProjectObj }) => {
  const [viewerImg, setViewerImg] = useState<string>('');

  return (
    <>
      <Transition show={viewerImg ? true : false} as={Fragment}>
        <Dialog onClose={() => setViewerImg('')}>
          <div className='fixed inset-0 bg-black/30 z-10' aria-hidden='true' />
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='z-10 fixed inset-0 flex w-screen items-center justify-center p-4'>
              <Dialog.Panel className='bg_secondary flex flex-col gap-4 w-full h-full rounded z-20 pt-4 pb-10'>
                <div className={'flex flex-row justify-end items-center px-4'}>
                  <button
                    className='w-8 h-8 rounded-full bg-secondary-light dark:bg-secondary-dark'
                    onClick={() => setViewerImg('')}
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </button>
                </div>
                <div className='relative flex-grow w-full bg-primary-light dark:bg-primary-dark'>
                  <Image
                    src={viewerImg}
                    fill
                    alt={viewerImg}
                    className='object-contain'
                  />
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      <div className='flex flex-col gap-3 w-full'>
        <div>
          <p className='text_regular font-general-medium text-2xl md:text-xl'>
            Gallery
          </p>
        </div>
        <div className='grid grid-cols-4 md:grid-cols-2 h-full gap-2 rounded-sm overflow-hidden'>
          {project.content.gallery?.map((image) => (
            <div
              className='relative aspect-square'
              key={Math.floor(Math.random() * 2001)}
            >
              <Image
                src={image}
                alt={image}
                fill
                className='object-cover cursor-pointer'
                onClick={() => setViewerImg(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
