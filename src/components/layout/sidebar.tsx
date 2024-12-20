import React from 'react';
import { LayoutDashboard, Users, GitBranch, Bot } from 'lucide-react';

const Sidebar = () => {
  // Get current path from window.location
  const currentPath = window.location.pathname;
  
  const navItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      href: '/contacts',
      label: 'Contacts',
      icon: Users
    },
    {
      href: '/pipelines',
      label: 'Pipelines',
      icon: GitBranch
    },
    {
      href: '/agents',
      label: 'AI Agents',
      icon: Bot
    }
  ];

  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r border-gray-200 bg-white">
      <div className="flex-1 py-6">
        <nav className="px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.href;
            const Icon = item.icon;
            
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${
                  isActive ? 'text-blue-700' : 'text-gray-500'
                }`} />
                <span className="font-medium">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;