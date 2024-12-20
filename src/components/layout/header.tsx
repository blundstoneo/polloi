import { UserCircle } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface HeaderProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function Header({ user }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold">Polloi</h1>
          </div>
          
          <div className="flex items-center">
            <div className="relative ml-3">
              <div>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center max-w-xs rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {user?.image ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.image}
                      alt={user.name ?? ""}
                    />
                  ) : (
                    <UserCircle className="h-8 w-8" />
                  )}
                </button>
              </div>
              
              {isProfileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-2">
                    <p className="text-sm">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => void signOut()}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
