import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 bg-white flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input type="text" placeholder='Search....' className='outline-none' />
      </div>
      <div className='flex gap-5 items-center'>
        <a 
          href='https://github.com/Anag0710' 
          className='bg-primary p-2 rounded-full text-xs text-white px-4 hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg text-center'
        >
          <span className='block text-base font-bold'>Developer's GitHub</span>
          
          
        </a>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
