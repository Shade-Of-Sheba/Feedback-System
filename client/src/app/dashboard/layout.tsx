import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, BarChart3 } from 'lucide-react'; // example icons

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 dark:bg-gray-800 p-6 flex flex-col">
        <div className="mb-8 flex items-center space-x-2">
          <Image
            src="/kuriftu-logo.png"
            alt="Kuriftu Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <Link href="/dashboard" className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Kuriftu
          </Link>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            <LayoutDashboard size={18} />
            Overview
          </Link>
          <Link
            href="/dashboard/insights"
            className="flex items-center gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            <BarChart3 size={18} />
            Insights
          </Link>
          {/* Add more sidebar links with icons here */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {/* Full-width Header */}
        <header className="bg-white shadow-md px-6 py-4 dark:bg-gray-700 w-full">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Dashboard Area
          </h2>
          {/* Add user info, notifications, etc. */}
        </header>

        {/* Page Content */}
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
