import React from 'react'
import icon1 from '../../assets/obj1.png'
import icon2 from '../../assets/obj2.png'
import icon3 from '../../assets/obj3.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'


export const fadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: delay,
            },
        },
    };
};

const ServicesData = [
    {
        id: 1,
        title: 'Security',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!',
        icon: icon1,
        delay: 0.5,
    },

    {
        id: 2,
        title: 'Gurantee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!',
        icon: icon2,
        delay: 0.8,
    },

    {
        id: 3,
        title: 'Affordability',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!',
        icon: icon3,
        delay: 1.1,
    },
]

export const Services = () => {
return (
    <>
    <section id='service' className='bg-gray-100 font-poppins py-8'>
        <div className='container py-14'>
            <motion.h1
            variants={fadeUp(0.2)}
            initial='hidden'
            whileInView='show'
            className='text-3xl font-bold text-center pb-10'>Services</motion.h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {ServicesData.map((data) => (
                    <UpdateFollower
                    key={data.id}
                    mouseOptions={{
                        backgroundColor: 'white',
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 5,
                        rotate: 720,
                        mixBlendMode: 'darken',
                        backgroundElement: (
                            <div>
                                <img src={data.icon} />
                            </div>
                        ),
                    }}
                    >
                        <motion.div
                        variants={fadeUp(data.delay)}
                        initial='hidden'
                        whileInView='show'
                        className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white'>
                            <img src={data.icon} alt="icon"
                            className='w-[100px] mb-4'
                            />
                            <div className='text-center space-y-2'>
                                <h1 className='text-2xl font-bold'>{data.title}</h1>
                                <p className='text-center text-sm text-black/75'>{data.description}</p>
                            </div>
                        </motion.div>
                    </UpdateFollower>
                ))}
            </div>
        </div>
    </section>
    </>
)
}
