'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from 'next-auth/react';
import NavToggler from './NavToggler';
import NavMenu from './NavMenu';
import { useScreenSize } from '@/hooks';

const Nav = () => {
  const { data: session } = useSession();

  const screenSize = useScreenSize();
  const [menuToggled, setMenuToggled] = useState<boolean>(false);

  const onMenuToggledHandle = (toggled: boolean): void => {
    setMenuToggled(toggled);
  };

  const isMobile = (): boolean => {
    return screenSize.width > 0 && screenSize.width < 768;
  };

  return (
    <nav className='fixed top-0 z-10 min-h-14 w-full screen_padding_x mx-auto bg_primary_gradient drop-shadow-bottom'>
      <div className='z-10 max-w-screen-lg mx-auto flex justify-between items-center my-3'>
        <div className='flex justify-between items-center w-full'>
          <div>
            <Link href={'/'} className='flex gap-2 flex-center '>
              <Image
                src={'/assets/images/logo.png'}
                alt='portfster-logo'
                width={30}
                height={30}
                className='object-contain'
              />
            </Link>
          </div>

          <div className='flex md:hidden justify-end gap-2 items-center'>
            <NavToggler
              toggled={menuToggled}
              onToggle={(toggled) => onMenuToggledHandle(toggled)}
            />
          </div>
        </div>
        {!isMobile() ? (
          <NavMenu
            toggled={menuToggled}
            session={session}
            handleClick={onMenuToggledHandle}
          />
        ) : null}
      </div>
      {isMobile() ? (
        <NavMenu
          toggled={menuToggled}
          session={session}
          handleClick={onMenuToggledHandle}
        />
      ) : null}
    </nav>
  );
};

export default Nav;
