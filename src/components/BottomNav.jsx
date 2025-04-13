import { Home, Gauge, Settings } from "../lib/icons";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Metrics", icon: Gauge },
  { name: "Settings", icon: Settings },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 flex justify-around items-center h-16 z-50">
      {navItems.map(({ name, icon: Icon }) => (
        <button
          key={name}
          className="flex flex-col items-center justify-center text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{name}</span>
        </button>
      ))}
    </nav>
  );
}

