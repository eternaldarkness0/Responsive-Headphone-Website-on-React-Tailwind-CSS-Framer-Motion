import { MdClose, MdMenu } from 'react-icons/md'
import { SlEarphones } from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export const Navbar = () => {

const [isActive, setIsActive] = useState(false);

const toggleNavbar = () => {
    setIsActive(!isActive);
}

return (
<>
    <div className='bg-brandDark text-white py-8 font-varela relative'>
        <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='container flex justify-between items-center'>
            {/* logo */}
            <div className='z-[999]'>
                <a href="#" className='text-xl font-bold uppercase'>
                    Playing / <span className='font-extralight text-white/70'>Market</span>
                </a>
            </div>
            {/* navbar  */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-4'>
                    <li>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <a href="#home" className='inline-block text-sm py-2 px-3 uppercase'>Home</a>
                        </UpdateFollower>
                    </li>
                    <li>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <a href="#service" className='inline-block text-sm py-2 px-3 uppercase'>Services</a>
                        </UpdateFollower>
                    </li>
                    <li>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <a href="#blog" className='inline-block text-sm py-2 px-3 uppercase'>Blog</a>
                        </UpdateFollower>
                    </li>
                    <li>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <a href="#about" className='inline-block text-sm py-2 px-3 uppercase'>About</a>
                        </UpdateFollower>
                    </li>
                    <li>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <a href="#contact" className='inline-block text-sm py-2 px-3 uppercase'>Contact</a>
                        </UpdateFollower>
                    </li>
                    <button className='text-xl ps-14'>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 1.5,
                            scale: 5,
                            mixBlendMode: 'difference',
                        }}
                        >
                        <SlEarphones/>
                        </UpdateFollower>
                    </button>
                </ul>
            </div>

            {/* responsive navbar */}
            <div
            onClick={toggleNavbar}
            className='md:hidden text-4xl z-[999]'>
                {isActive ? <MdClose/> : <MdMenu/>}
            </div>

            <AnimatePresence mode='wait'>
            {isActive && (
                <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.2 }}
                className='absolute top-20 left-0 w-full bg-brandDark/80 py-8 backdrop-blur-md md:hidden'>
                    <ul className='flex flex-col items-center gap-5 font-semibold text-xl'>
                        <li
                        className='w-[200px] text-center'
                        onClick={toggleNavbar}><a href="#home">Home</a>
                        </li>

                        <li
                        className='w-[200px] text-center'
                        onClick={toggleNavbar}><a href="#service">Services</a>
                        </li>

                        <li
                        onClick={toggleNavbar}
                        className='w-[200px] text-center'><a href="#blog">Blog</a>
                        </li>

                        <li
                        onClick={toggleNavbar}
                        className='w-[200px] text-center'><a href="#about">About</a>
                        </li>

                        <li
                        onClick={toggleNavbar}
                        className='w-[200px] text-center'><a href="#contact">Contact</a>
                        </li>
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.nav>
    </div>
</>
)
}
