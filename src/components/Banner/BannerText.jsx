import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

export const BannerText = () => {
return (
    <section className='text-center py-12 font-varela'>
        <div className="container">
            <div className='bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl hover:scale-105 duration-500 hover:shadow-2xl p-8'>
                <UpdateFollower
                mouseOptions={{
                    backgroundColor: 'black',
                    zIndex: 999,
                    followSpeed: 0.5,
                    mixBlendMode: 'screen',
                    scale: 8,
                }}
                >
                <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>Headphones With Good Quality And Affordable Price
                </p>
                </UpdateFollower>
            </div>
        </div>
    </section>
)
}
