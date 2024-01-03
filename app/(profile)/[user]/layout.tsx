import { ProfileNav } from '@/components/profile';

function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { user: string; slug: string };
}) {
  return (
    <>
      <ProfileNav params={params} />
      <section className='flex flex-col h-full w-full mt-3 md:mt-5'>
        {children}
      </section>
    </>
  );
}

export default layout;
