"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-sm">Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
    >
      Sign In with GitHub
    </button>
  );
}
