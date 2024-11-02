import React, { useState } from 'react';
import Headphone1 from '../../assets/headphone1.png'
import Headphone2 from '../../assets/headphone2.png'
import Headphone3 from '../../assets/headphone3.png'
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';


const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            }
        }
    }
};

const headphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: 'Headphones Wireless',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam nesciunt, porro tenetur corrupti aperiam, ipsam voluptatum.',
        price: '$100',
        modal: 'Modal Brown',
        bgColor: '#8b5958',
    },

    {
        id: 2,
        image: Headphone2,
        title: 'Headphones Wireless 2',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam nesciunt, porro tenetur corrupti aperiam, ipsam voluptatum.',
        price: '$100',
        modal: 'Lime Green',
        bgColor: '#638153',
    },

    {
        id: 3,
        image: Headphone3,
        title: 'Headphones Wireless 3',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam nesciunt, porro tenetur corrupti aperiam, ipsam voluptatum.',
        price: '$100',
        modal: 'Ocean Blue',
        bgColor: '#5d818c',
    },
]

export const Main = () => {

const [activeData, setActiveData] = useState(headphoneData[0]);

const handleActiveData = (data) => {
    setActiveData(data);
};

return (
<>
    <section id='home' className='bg-brandDark text-white font-varela'>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
            {/* text section */}
            <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                <div className='space-y-5 md:text-left text-center'>

                    <AnimatePresence mode='wait'>
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor: 'white',
                            zIndex: 999,
                            followSpeed: 0.5,
                            mixBlendMode: 'difference',
                            scale: 10,
                        }}
                        >
                            <motion.h1
                            key={activeData.id}
                            variants={fadeUp(0.2)}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className='text-3xl lg:text-6xl font-bold   font-varela'>{activeData.title}
                            </motion.h1>
                        </UpdateFollower>
                    </AnimatePresence>

                    <AnimatePresence mode='wait'>
                    <motion.p
                    key={activeData.id}
                    variants={fadeUp(0.3)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    className='text-sm leading-loose text-white/80'>{activeData.subtitle}
                    </motion.p>
                    </AnimatePresence>

                    <AnimatePresence>
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: activeData.bgColor,
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 6,
                        rotate: -720,
                        backgroundElement: (
                            <div>
                                <img src={activeData.image} />
                            </div>
                        ),
                    }}
                    >
                    <motion.button
                    key={activeData.id}
                    variants={fadeUp(0.6)}
                    initial='hidden'
                    animate='show'
                    exit='exit'
                    style={{ backgroundColor: activeData.   bgColor }} className='px-4 py-2 inline-block   font-normal rounded-sm'>Buy and Listen
                    </motion.button>
                    </UpdateFollower>
                    </AnimatePresence>

                    {/* headphones list title*/}
                    <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        <div className='w-20 h-[1px] bg-white'></div>
                        <p className='uppercase text-sm'>Top Headphones for you</p>
                        <div className='w-20 h-[1px] bg-white'></div>
                    </div>

                    {/* headphones list */}
                    <div className='grid grid-cols-3 gap-10'>
                        {headphoneData.map((item) => {
                            return (
                                <UpdateFollower
                                key={item.id}
                                mouseOptions={{
                                    backgroundColor: item.bgColor,
                                    zIndex: 999,
                                    followSpeed: 0.5,
                                    scale: 5,
                                    rotate: -720,
                                    text: 'View Details',
                                    textFontSize: '3px'
                                }}
                                >
                                <div
                                onClick={() => handleActiveData(item)}
                                className='grid grid-cols-2 place-items-center cursor-pointer'>
                                    <div>
                                        <img src={item.image} alt="headphones" className='w-[200px]' />
                                    </div>
                                    <div className='space-y-2'>
                                        <p className='text-base font-bold'>{item.price}</p>
                                        <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                    </div>
                                </div>
                                </UpdateFollower>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* main image */}
            <div className='flex flex-col justify-end items-center'>

                <AnimatePresence mode='wait'>
                        <motion.img
                        key={activeData.id}
                        initial={{ opacity: 0, scale: 0.9, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 100,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                        transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                        src={activeData.image} alt="main"
                        className='w-[300px] md:w-[400px] xl:w-[550px]'
                        />
                </AnimatePresence>

            </div>

        </div>
    </section>
</>
)
}