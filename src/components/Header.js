import Image from 'next/image'
import {
    MagnifyingGlassIcon as SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars3Icon as MenuIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
//import { heroImg } from '@/assets'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import SignIn from '@/pages/auth/SignIn'
import { useRecoilState } from 'recoil'
import { modalState } from '@/atoms/modalAtom'


function Header() {
    const { data: session } = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    
    const router = useRouter()

    console.log('.env' + process.env.GOOGLE_CLIENT_ID)

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>
            {/* Left */}
            <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image 
                    src='https://links.papareact.com/ocw'
                    width={300}
                    height={300}
                    alt='logo'
                    quality={80}
                />
            </div>

            <div onClick={() => router.push('/')} className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'>
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
                <HomeIcon onClick={() => router.push('/')} className='navBtn' />
                <MenuIcon className='h-6 md:hidden cursor-pointer' />
                
                { session ? (
                <>
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-0' />
                        <div className='absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                    </div>
                        
                    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />

                    <img
                        onClick={signOut} 
                        src={session.user.image} 
                        alt='profile pic'
                        className='w-5 rounded-full cursor-pointer'
                    />
                </>
                ):(
                    <button onClick={signIn}>Sign In</button>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Header