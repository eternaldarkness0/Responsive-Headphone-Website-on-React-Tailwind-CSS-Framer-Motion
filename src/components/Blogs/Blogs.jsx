import React from 'react'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blog4 from '../../assets/blog4.jpg'
import { UpdateFollower } from 'react-mouse-follower'

const BlogsData = [
    {
        id: 1,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem quas deleniti alias! Praesentium, vitae.',
        img: blog4,
        link: '#'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem quas deleniti alias! Praesentium, vitae.',
        img: blog3,
        link: '#'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem quas deleniti alias! Praesentium, vitae.',
        img: blog2,
        link: '#'
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem quas deleniti alias! Praesentium, vitae.',
        img: blog1,
        link: '#'
    },
]

export const Blogs = () => {
return (
<>
    <section id='blog' className='bg-gray-50'>
        <div className="container py-14">
            <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {BlogsData.map((data) => {
                return (
                    <UpdateFollower
                    key={data.id}
                    mouseOptions={{
                        backgroundColor: 'black',
                        zIndex: 999,
                        followSpeed: 1.5,
                        text:'Read',
                        textFontSize: '3px',
                        scale: 5,
                    }}
                    >
                    <div
                    className='flex flex-col items-center justify-center max-w-[300px] mx-auto shadow-lg rounded-md bg-white gap-6 hover:-translate-y-2 duration-300'>
                        <img src={data.img} alt="blog"
                        className='rounded-md'
                        />
                        <div className='space-y-2 p-4'>
                            <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1>
                            <p className='line-clamp-2'>{data.description}</p>
                        </div>
                    </div>
                    </UpdateFollower>
                );
            })}
        </div>
        </div>
    </section>
</>
)
}
