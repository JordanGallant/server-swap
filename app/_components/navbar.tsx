'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { useTheme } from 'next-themes';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="bg-white dark:bg-[#272a30] border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 h-20 relative">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4 sm:gap-8 h-full">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300 dark:bg-yellow-400 rounded-lg transform -rotate-12 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🔄</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-yellow-500 dark:text-yellow-400 font-bold text-base sm:text-lg">SILLY</span>
              <span className="text-yellow-500 dark:text-yellow-400 font-bold text-base sm:text-lg">SWAP</span>
            </div>
          </div>

          <div className="hidden md:flex items-center h-full">
            <button className="px-6 h-full text-gray-900 dark:text-[#dee7cd] hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-x border-gray-200 dark:border-gray-700 transition-colors">
              Swap
            </button>
            <button className="px-6 h-full text-gray-600 dark:text-[#dee7cd]/70 hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-x border-gray-200 dark:border-gray-700 transition-colors">
              Portfolio
            </button>
          </div>
        </div>

        <div className="flex items-center h-full">
          <ThemeToggle/>
          <button className="hidden sm:flex items-center gap-2 px-6 h-full text-gray-900 dark:text-[#dee7cd] hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-x border-gray-200 dark:border-gray-700 transition-colors">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-medium">Base</span>
          </button>
  <button className="hidden sm:flex items-center gap-2 px-6 h-full text-gray-900 dark:text-[#dee7cd] hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-l border-gray-200 dark:border-gray-700 transition-colors">
    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full"></div>
    <span className="font-mono text-xs sm:text-sm">0x54...d5</span>
  </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 dark:text-[#dee7cd] hover:bg-gray-100 dark:hover:bg-[#1c1f25] rounded transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white dark:bg-[#272a30] border-t border-gray-200 dark:border-gray-700 shadow-lg md:hidden z-50">
          <div className="flex flex-col">
            <button className="px-6 py-4 text-gray-900 dark:text-[#dee7cd] hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-b border-gray-200 dark:border-gray-700 text-left transition-colors">
              Swap
            </button>
            <button className="px-6 py-4 text-gray-600 dark:text-[#dee7cd]/70 hover:bg-gray-100 dark:hover:bg-[#1c1f25] border-b border-gray-200 dark:border-gray-700 text-left transition-colors">
              Portfolio
            </button>
            
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-[#dee7cd]/70 text-sm mb-2 block">Network</span>
              <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#1c1f25] hover:bg-gray-200 dark:hover:bg-[#1c1f25]/80 px-4 py-2 rounded-md transition-colors w-full">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-900 dark:text-[#dee7cd] font-medium">Base</span>
              </button>
            </div>
            
            <div className="px-6 py-4">
              <span className="text-gray-600 dark:text-[#dee7cd]/70 text-sm mb-2 block">Wallet</span>
              <button className="flex items-center gap-2 bg-gray-100 dark:bg-[#1c1f25] hover:bg-gray-200 dark:hover:bg-[#1c1f25]/80 px-4 py-2 rounded-md transition-colors w-full">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full"></div>
                <span className="text-gray-900 dark:text-[#dee7cd] font-mono text-sm">0x54...d5</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}