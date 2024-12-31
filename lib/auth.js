import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserValues } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

export const login = async (credentials) => {
  try {
    connectToDb();
    const user = await UserValues.findOne({ userName: credentials.userName });

    if (!user) {
      throw new Error("wrong credentials !!");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong password");
    }

    const userData = { ...user._doc };
    return userData;
  } catch (error) {
    console.log(error);
    throw new Error("Failt to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  useSession,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);

          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await UserValues.findOne({ email: profile.email });

          if (!user) {
            const newUser = UserValues({
              userName: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
