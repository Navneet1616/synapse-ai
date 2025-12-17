// src/components/layout/Header.jsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-4 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo/App Name */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          App Logo
        </Link>
        
        {/* Utility Links */}
        <nav className="space-x-4">
          <Link href="/notifications" className="text-gray-600 hover:text-indigo-600">
            Notifications
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-indigo-600">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}