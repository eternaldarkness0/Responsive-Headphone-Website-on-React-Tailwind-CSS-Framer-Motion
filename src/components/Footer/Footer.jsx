import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaInstagram, FaMapLocation, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa6'
import Cards from '../../assets/credit-cards.png'


export const Footer = () => {
return (
<>
    <footer id='contact' className='bg-primary pt-12 pb-8 text-white'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20'>
                {/* company details */}
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-xl font-bold uppercase'>Playing / <span className='font-extralight text-white/70'>Market</span></h1>
                    <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem neque tempore facilis fugiat beatae impedit assumenda molestias.
                    </p>

                    <div>
                        <p className='flex items-center     gap-2'><FaPhone/> +1 234 567 890</p>
                        <p className='flex items-center gap-2 mt-2'><FaMapLocation/> Florida, USA</p>
                    </div>
                </motion.div>

                {/* footer links */}
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <ul className='space-y-2'>
                            <li className='hover:translate-x-2 duration-300'><a href="#home">Home</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#about">About</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#contact">Contact us</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#contact">Privacy Policy</a></li>
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <ul className='space-y-2'>
                            <li className='hover:translate-x-2 duration-300'><a href="#home">Home</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#about">About</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#contact">Contact us</a></li>
                            <li className='hover:translate-x-2 duration-300'><a href="#contact">Privacy Policy</a></li>
                        </ul>
                    </div>
                </motion.div>

                {/* footer socials */}
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.6,
                }}
                className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300' />
                        <FaYoutube className='text-3xl hover:scale-105 duration-300' />
                        <FaTwitter className='text-3xl hover:scale-105 duration-300' />
                        <FaGoogle className='text-3xl hover:scale-105 duration-300' />
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xl'>Payment Methods</p>
                        <img src={Cards} alt="cards"
                        className='w-[80%]'
                        />
                    </div>
                </motion.div>


            </div>
        </div>
    </footer>
</>
)
}
