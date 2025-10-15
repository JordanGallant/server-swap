'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a2e] px-4 sm:px-6 h-20 relative">
      <div className="flex items-center justify-between h-full">
        {/* Left Section - Logo and Navigation */}
        <div className="flex items-center gap-4 sm:gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300 rounded-lg transform -rotate-12 flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🔄</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-yellow-300 font-bold text-base sm:text-lg">SILLY</span>
              <span className="text-yellow-300 font-bold text-base sm:text-lg">SWAP</span>
            </div>
          </div>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:flex items-center h-full">
            <button className="px-6 h-full text-white border-x border-gray-700">
              Swap
            </button>
            <button className="px-6 h-full text-gray-400 border-x border-gray-700">
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Section - Chain Selector and Wallet */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Chain Selector - Desktop Only */}
          <button className="hidden sm:flex items-center gap-2 bg-gray-700/50 hover:bg-gray-700 px-4 py-2 transition-colors">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-white font-medium">Base</span>
          </button>

          {/* Wallet Address */}
          <button className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-2 sm:px-4 py-2 rounded-lg transition-colors">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-orange-400 to-purple-600 rounded-full"></div>
            <span className="text-white font-mono text-xs sm:text-sm">0x54...d5</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-gray-700/50 rounded transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1a1a2e] border-t border-gray-700 shadow-lg md:hidden z-50">
          <div className="flex flex-col">
            <button className="px-6 py-4 text-white hover:bg-gray-700/30 border-b border-gray-700/50 text-left transition-colors">
              Swap
            </button>
            <button className="px-6 py-4 text-gray-400 hover:bg-gray-700/30 border-b border-gray-700/50 text-left transition-colors">
              Portfolio
            </button>
            
            {/* Chain Selector in Mobile Menu */}
            <div className="px-6 py-4 border-b border-gray-700/50">
              <span className="text-gray-400 text-sm mb-2 block">Network</span>
              <button className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded transition-colors w-full">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-white font-medium">Base</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}