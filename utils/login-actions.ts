"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib/utils";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let userName = "john";
let isAdmin = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUserName = formData.get("userName") as string;
  const formPassword = formData.get("password") as string;

  // Check user in the DB
  //const user = await db.getUser({ userName, password });

  if (formUserName !== userName) {
    return { error: "Špatné přihlašovací jméno nebo heslo" };
  }

  session.userId = "1";
  session.userName = formUserName;
  session.isAdmin = isAdmin;
  session.isLoggedIn = true;

  await session.save();

  //redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
