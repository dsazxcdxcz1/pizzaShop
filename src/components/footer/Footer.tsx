import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <>
            <div className='lg:flex lg:justify-center lg:gap-5 lg:pt-4'>    
                <div className='flex'>
                    <h3 className='bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text p-4 font-bold text-2xl'>pizzashop</h3>
                </div>
                <div className='grid grid-cols-2 gap-4 lg:gap-7 p-6 sm:flex sm:justify-around '>
                    <div>
                        <h3 className='text-neutral-400 text-xl'>Home</h3>
                        <div className='flex flex-col gap-2 pt-2'>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                To Order
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                About us
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Events
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Menu
                            </h2>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-neutral-400 text-xl'>Events</h3>
                        <div className='flex flex-col gap-2 pt-2'>    
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                3 Pizza 1 Free Coffee
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                2 Pizza for 1 Price
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Kitchen Tour
                            </h2>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-neutral-400 text-xl'>Menu</h3>
                        
                        <div className='flex flex-col gap-2 pt-2'>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Show All
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Seaproducts
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Vegan
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Meat
                            </h2>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-neutral-400 text-xl'>About Us</h3>
                        
                        <div className='flex flex-col gap-2 pt-2'>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Our History
                            </h2>
                            <h2 style={{color: 'rgba(81, 81, 81, 1)'}}>
                                Why We?
                            </h2>
                        </div>
                    </div>
                </div>     
            </div>
                <div className='flex justify-around items-center bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text'>
                    <div>
                    <h3 className='p-4 font-bold '>+7 (937) 333-55-33</h3>
                    </div>
                    <div className='flex gap-4 text-2xl text-orange-400'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </div>
        </>
    )
}