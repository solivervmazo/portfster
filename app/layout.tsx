import '@/styles/global.css';
import { Nav } from '@/components';
import { ProfileBanner, ProfileFooter } from '@/components/profile';
import { Providers } from './providers';
import { Session } from 'next-auth';

export const metadata = {
  title: 'Portfster',
  description: 'Discover & Share Portoflio',
};

const RootLayout = ({
  children,
  session,
}: {
  children: Array<React.ReactNode>;
  session: Session;
}) => {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className='bg_primary_gradient w-full h-full'>
        <Providers session={session}>
          {/* <div className='main bg_primary_gradient'>
            <div className='' />
          </div> */}
          <header>
            <Nav />
            {/* spacer for nav height */}
            <div className='w-100 h-14'></div>
            <ProfileBanner />
          </header>
          <main className='main'>
            <div className='flex flex-grow w-full md:flex-row flex-col md:gap-3 justify-start max-w-screen-lg'>
              {children}
            </div>
          </main>
          <footer>
            <ProfileFooter />
          </footer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
