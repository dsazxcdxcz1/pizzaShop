import React from 'react'

const About = () => {
    return  (
        <div className='flex flex-col gap-2 items-center justify-center sm:text-center'>
            <h2 className='font-bold text-3xl text-white p-4'>
                About us
            </h2>
            <p className='text-neutral-400 p-4 sm:max-w-[400px] '>
                In just a couple of years, we have opened 6 outlets in different cities: Kazan, Chelyabinsk, Ufa, Samara, Izhevsk, and in the future we plan to develop the network in other major cities of Russia.
            </p>
            <img src="./PizzaAbout.png" alt="Pizza About" />
            <p className='text-neutral-400 p-4 sm:max-w-[400px]'>The kitchen of each point is at least: 400-500 sq. m. meters, hundreds of employees, smoothly performing work in order to receive / prepare / form / deliver customer orders on time.</p>
        </div>
    )
}
export default About 