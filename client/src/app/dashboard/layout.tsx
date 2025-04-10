import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 dark:bg-gray-800 p-6">
        <div className="mb-8">
          <Link href="/dashboard" className="text-xl font-semibold text-gray-800 dark:text-gray-100 block mb-2">
            Dashboard
          </Link>
        </div>
        <nav>
          <Link href="/dashboard" className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md px-2">
            Overview
          </Link>
          <Link href="/dashboard/insights" className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md px-2 mt-1">
            Insights
          </Link>
          {/* Add more sidebar links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 mb-6 rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Dashboard Area
          </h2>
          {/* Add user info, notifications, etc. */}
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}