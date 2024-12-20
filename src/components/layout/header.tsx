import React from 'react';
import { Menu, Settings, LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  // We'll need to handle user session state in your app's context
  const user = {
    name: "User Name",
    email: "user@example.com",
    image: null
  };

  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log('Sign out clicked');
  };

  return (
    <header className="w-full h-16 border-b border-gray-200 bg-white">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Polloi</h1>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="flex items-center space-x-2">
                <User className="w-6 h-6 text-gray-600" />
                <span className="text-gray-800">{user.name}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;