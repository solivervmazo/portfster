'use client';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { Session } from 'next-auth';
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
function NavMenu({
  session,
  toggled = false,
  handleClick = (toggled: boolean): void => {},
}: {
  session: Session | null;
  toggled?: boolean;
  handleClick?: (toggled: boolean) => void;
}) {
  const isLoggedIn = session?.user;
  const [authProviders, setAuthProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setProviders = async () => {
      const providers = await getProviders();
      setAuthProviders(providers);
    };
    setProviders();
  }, []);

  console.log('PROOVIDER', authProviders);
  return (
    <div
      className={`${
        toggled ? 'md:flex sm:block' : 'hidden'
      } m-0 md:flex md:justify-end md:gap-3 md:flex-grow block py-2 p-0 justify-center items-center z-50`}
    >
      <div className='flex justify-between items-center py-2 md:border-t-0 border-t-2 border-secondary-light dark:border-secondary-dark'>
        <span className='text-left md:hidden font-medium text-primary-dark dark:text-ternary-light'>
          Night mode
        </span>
        <ThemeSwitcher />
      </div>
      <div className='flex justify-between flex-shrink-0 items-center py-2 md:border-t-0 border-t-2 md:gap-3 border-secondary-light dark:border-secondary-dark'>
        {isLoggedIn ? (
          <>
            <div className='flex flex-row justify-between gap-2'>
              <div className='relative h-12 w-12 md:h-9 md:w-9 rounded-full overflow-hidden'>
                <Link href={'/soliver'}>
                  <Image
                    src={'https://i.pravatar.cc/37'}
                    fill
                    alt='profile_img'
                  />
                </Link>
              </div>
              <div className='flex flex-col gap-0 items-start justify-center '>
                <Link
                  href={'/soliver.v.mazo'}
                  onClick={() => handleClick(false)}
                  className='md:hidden'
                >
                  <span className='text_primary link_primary font-general-semibold'>
                    Soliver Mazo
                  </span>
                </Link>
                <Link
                  href={'/soliver/settings'}
                  className='md:flex md:bg_secondary md:w-9 md:h-9 md:rounded-full  md:items-center md:justify-center'
                >
                  <FontAwesomeIcon
                    icon={faCog}
                    size='lg'
                    className='hidden md:flex'
                  />
                  <span className='text_primary link_primary flex md:hidden text_secondary font-general-medium text-sm'>
                    Account
                  </span>
                </Link>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className='text_primary link_primary text-left font-medium'
            >
              Logout
            </button>
          </>
        ) : (
          authProviders &&
          authProviders.google && (
            <div>
              <button
                onClick={() => {
                  signIn(authProviders.google.id);
                }}
                className='text_primary link_primary text-left font-medium'
              >
                Login
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default NavMenu;
