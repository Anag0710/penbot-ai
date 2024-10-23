"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { BookIcon, FileClock, Gamepad2Icon, Home, Settings2, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UsageTrack from './UsageTrack';

function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard',
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history',
        },
        {
            name: 'Games',
            icon: Gamepad2Icon,
            path: '/dashboard/games',
        },
        {
            name: 'Settings',
            icon: Settings2,
            path: '/dashboard/settings',
        },
        {
            name: 'Learning Hub', 
            icon: BookIcon,  
            path: '/dashboard/learninghub', 
        },
    ];

    const path = usePathname();
    
    useEffect(() => {
        console.log(path);
    }, [path]); 

    return (
        <div className='h-screen relative px-5 py-5 pl-6 pr-14 shadow-sm border bg-white'>
            <div className='flex mr-11'>
                <Image src={'/logo.svg'} alt='logo' width={130} height={100} />
            </div>
            <hr className='my-5 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index} passHref>
                        <div className={`flex gap-2 mb-2 p-3
                            hover:bg-primary hover:text-white rounded-lg
                            cursor-pointer items-center
                            ${path === menu.path ? 'bg-primary text-white' : ''}
                        `}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack/>
            </div>
        </div>
    );
}

export default SideNav;
