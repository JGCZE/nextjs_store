"use client";

import { login, signIn } from "@/lib/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { useActionState, useEffect } from "react";

const CMS = () => {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <div>
      <Link href="/cms">CMS</Link>
    </div>
  );
};

export default CMS;
