'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md px-4 w-full h-[70px] flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <Image
            src="/kuriftu-logo.png"
            alt="Kuriftu Logo"
            width={48}
            height={48}
            className="rounded"
          />
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-gray-800 dark:text-gray-100"
          >
            Kuriftu
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Desktop and Tablet */}
        <aside
          className={`
            hidden md:flex flex-col justify-between
            ${isCollapsed ? 'w-20' : 'w-64'}
            transition-all duration-300
            bg-gray-200 dark:bg-gray-800 p-2
          `}
        >
          <nav className="flex flex-col space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center justify-center sm:justify-start gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
            >
              <LayoutDashboard size={20} />
              {!isCollapsed && <span>Overview</span>}
            </Link>
            <Link
              href="/dashboard/insights"
              className="flex items-center justify-center sm:justify-start gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
            >
              <BarChart3 size={20} />
              {!isCollapsed && <span>Insights</span>}
            </Link>
          </nav>

          {/* Toggle Button - Desktop/Tablet */}
          <button
            onClick={toggleSidebar}
            className="md:flex items-center justify-center py-2 px-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </aside>

        {/* Sidebar - Mobile (overlay style) */}
        {isMobileSidebarOpen && (
          <aside className="sm:hidden fixed top-[70px] bottom-10 left-0 w-64 bg-gray-200 dark:bg-gray-800 p-4 z-40 shadow-md">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <LayoutDashboard size={20} />
                <span>Overview</span>
              </Link>
              <Link
                href="/dashboard/insights"
                className="flex items-center gap-2 py-2 px-2 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <BarChart3 size={20} />
                <span>Insights</span>
              </Link>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      {/* Footer Nav - Mobile */}
      <footer className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-200 dark:bg-gray-800 flex justify-around py-2 border-t z-50">
        <Link
          href="/dashboard"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300"
        >
          <LayoutDashboard size={20} />
        </Link>
        <Link
          href="/dashboard/insights"
          className="flex flex-col items-center text-gray-700 dark:text-gray-300"
        >
          <BarChart3 size={20} />
        </Link>

        {/* Toggle Button - Mobile */}
        <button
          onClick={toggleMobileSidebar}
          className="flex flex-col items-center text-gray-700 dark:text-gray-300"
        >
          {isMobileSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </footer>
    </div>
  );
}
