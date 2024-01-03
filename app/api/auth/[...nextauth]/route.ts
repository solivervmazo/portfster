import NextAuth, { DefaultSession, Profile, Session } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from '@/utils';
import { User } from '@/models';

const clientId = process.env.GOOGLE_ID ?? '';
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: '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',
    }),
  ],
  callbacks: {
    async session({
      session,
    }: {
      session: Session;
    }): Promise<Session | DefaultSession> {
      console.log('CALLED');
      const sessionUser = User.findOne({
        email: session.user?.email,
      });
      return session;
    },
    async signIn({
      profile,
    }: {
      profile?: Profile;
    }): Promise<string | boolean> {
      try {
        console.log('AAAAAAAAA');
        await connectToDb();
        console.log('BBBBBBBB', profile);
        const userExists =
          profile &&
          (await User.findOne({
            email: profile.email,
          }));
        console.log('CCCCCC', userExists);
        if (!userExists) {
          profile &&
            (await User.create({
              email: profile.email,
              username: profile.name?.replace(' ', '').toLowerCase(),
              image: profile.image,
            }));
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
