import React from 'react';
import BotIcon from './bot-icon'; // Adjust the import path as necessary

const Header = () => (
  <header className="flex items-center justify-center h-16 bg-gray-900 text-white">
    <BotIcon className="animate-wave h-7 w-6 mr-2" />
    <h1 className="text-2xl font-bold">字节造物策略型Agent演示版</h1>
  </header>
);

export default Header;