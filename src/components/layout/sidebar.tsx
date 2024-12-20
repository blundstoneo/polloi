import { Home, Users, ListTodo, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Pipelines", href: "/pipelines", icon: ListTodo },
  { name: "AI Agents", href: "/agents", icon: BrainCircuit },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 flex-1 space-y-1 px-2">
            {navigation.map((item) => {
              const isActive = router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      isActive ? "text-gray-500" : "text-gray-400"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}