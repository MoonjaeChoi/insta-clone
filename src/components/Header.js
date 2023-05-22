import React from 'react'
import Image from 'next/image'
import {
    MagnifyingGlassIcon as SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars3Icon as MenuIcon,
    HomeIcon
} from '@heroicons/react/24/solid'

import { heroImg } from '@/assets'

function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>
            {/* Left */}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image 
                    src='https://links.papareact.com/ocw'
                    width={300}
                    height={300}
                    alt='logo'
                    quality={80}
                />
            </div>

            <div className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'>
                <Image 
                    src='https://links.papareact.com/jjm'
                    width={300}
                    height={300}
                    alt='logo'
                    quality={80}
                />
            </div>

            {/* Middle Search input field*/}
            {/* https://heroicons.com/ */}
            <div className='max-w-xs'>
                <div className='relative mt-1 p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
                    type='text'
                    placeholder='Search' />
                </div>
            </div>
            {/* Right */}
            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='navBtn' />
                <MenuIcon className='h-6 md:hidden cursor-pointer' />
                <div className='relative navBtn'>
                    <PaperAirplaneIcon className='navBtn rotate-0' />
                    <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                </div>
                
                <PlusCircleIcon className='navBtn' />
                <UserGroupIcon className='navBtn' />
                <HeartIcon className='navBtn' />

                <Image src={heroImg} alt='profile pic' className='w-5 rounded-full cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Header