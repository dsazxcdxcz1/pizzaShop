import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const HeaderContainer = () => {
    return (
        <div className='lg:flex lg:flex-row-reverse lg:justify-center lg:gap-[5rem] lg:pt-[2rem]'>    
            <div className='flex justify-center items-center min-h-[55vh]'>
                <div>
                    <img src="/headerImg.png" alt="header img" />
                    <div className='absolute top-10 ml-[9rem] lg:top-25'>
                        <img src="/pizza.png" alt="pizza" />
                    </div>
                    <div className='absolute top-90 lg:top-100 ml-[-3rem]'>
                        <img src="/fries.png" alt="fries" />
                    </div>
                </div>
            </div>
           <div>
                <div className='p-4'>
                    <img src="/headerBgPizza.png" alt="header Bg Pizza" className='hidden lg:flex lg:absolute -z-10 m-4' />
                    <h1 className='text-4xl text-white font-inter  font-bold lg:text-5xl'>The Fastest <p>Pizza <span style={{color: 'FF612E'}}><FontAwesomeIcon icon={faBolt}style={{color: 'FF612E'}} /></span>Delivery</p></h1>
                </div>
                <div style={{color: 'rgba(163, 163, 163, 1)'}} className='text-sm p-4 lg:max-w-[320px] lg:text-base'>
                    <p>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className='text-white'>pizza is free!</span></p>
                </div>
                <div className='flex flex-col lg:flex-col-reverse'>
                    <div className='p-4 '>    
                        <div className='text-xl rounded-full overflow-hidden inline-block' style={{border: '2px solid #FE9C1C'}}>
                            <button className='text-white px-4 py-2 cursor-pointer'
                            style={{background: 'linear-gradient(to right,#FE9C1C, #FF5E2A)',
                            color: 'white',
                            }}>
                                To order
                            </button>
                            <button className='px-4 py-2 cursor-pointer' style={{color: '#FE9C1C'}}>Pizza-Menu</button>
                        </div>
                    </div>
                    <div>
                        <p className='pt-4 px-5' style={{color: 'rgba(163, 163, 163, 1)'}}>Cooking process:</p>
                        <div className='relative w-[100%] h-auto  '>
                            <img src="/headerPizza.png" alt="Pizza img" />
                            <FontAwesomeIcon
                                icon={faPlay}
                                className='absolute top-1/2 left-30 w-10 h-10 -translate-x-1/2 -translate-y-1/2 text-orange-400 text-5xl bg-neutral-900 px-4 py-2 rounded-full border-2 border-orange-600 '
                            />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default HeaderContainer;
