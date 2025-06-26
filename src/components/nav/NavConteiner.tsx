import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { BasketContainer } from '../../App';


const NavConteiner = () => {
    const contextValue = useContext(BasketContainer);


    const { basket, setBasket } = contextValue;
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [check, setCheck] = useState<number>(0)
    const [activeElement, setActiveElement] = useState<string>('Home')

    function openModalWindow(){
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        const total = basket.reduce((sum, item) => sum + item.price, 0);
        setCheck(total);
    }, [basket]);
    function MenuElement(event: React.MouseEvent<HTMLLIElement>){
        if (event.currentTarget.innerText === 'Menu' ){
        setActiveElement('Menu')
        } else if(event.currentTarget.innerText === 'Events'){
            setActiveElement('Events')
        } else if(event.currentTarget.innerText === 'About us'){
            setActiveElement('About us')
        } else{
            setActiveElement('Menu')
        }
    }
    function LeaveELement(){
        setActiveElement('Home')
    }
    function DeliteProduct(idDelite: string){
        setBasket(newBasket => newBasket.filter(item => item.id  !== idDelite))
    }
    return (
        <>
            {isVisible === true &&
                <div className='flex justify-center items-center z-1000 fixed w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)] ' onClick={openModalWindow}>
                    <div className='bg-white rounded-4xl text-3xl p-4 max-h-[50vh] min-w-[50vw] overflow-auto' onClick={(event) => event.stopPropagation() }>
                        {basket.length === 0 ?
                            <h2 className='text-center'>You don't have any product, please select a product</h2>
                        : 
                            null
                        }
                        {basket.map((basket) => {
                            return (
                                <div className='flex gap-2 items-center justify-around' key={basket.id}>
                                    <h2>
                                        <img src={basket!.img} alt="img basket" className='max-w-[5rem]' />
                                    </h2>
                                    <h1>{basket!.name}</h1>
                                    <h1 className='text-center '>{basket!.price}$</h1>
                                    <div className='text-xl lg:text-2xl xl:text-3xl text-white bg-red-800 rounded-2xl px-1 py-1  cursor-pointer transform transition-transform duration-800 hover:scale-110' onClick={() => DeliteProduct(basket.id)}>
                                        Delite 
                                    </div>
                                </div>
                            )
                        })}
                        
                        <div className='flex justify-center items-center lg:justify-end lg:items-end'>
                            <h2 className='text-2xl'>Price for all products: {check.toFixed(2)}$</h2>
                        </div>
                    </div>
                </div>
            }
            <div className=" flex  justify-around items-center font-bold pt-4 z-30">
                <div>
                    <h3 className="bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text text-2xl flex items-center">
                        pizzashop
                    </h3>
                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex text-neutral-400 gap-15'>
                        <li className={`${
                            activeElement === 'Home' 
                            ?
                            'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text cursor-pointer '
                            :
                            'text-neutral-400'
                        }`}
                        onMouseEnter={LeaveELement}>Home
                        </li>
                        <li className={`${
                            activeElement === 'Menu' 
                            ?
                            'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text cursor-pointer'
                            :
                            'text-neutral-400'
                        } transition-all duration-600 ease-in-out`}
                         onMouseEnter={MenuElement}
                         onMouseLeave={LeaveELement}>Menu</li>
                        <li className={`${
                            activeElement === 'Events' 
                            ?
                            'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text cursor-pointer'
                            :
                            'text-neutral-400'
                        } transition-all duration-600 ease-in-out`}
                         onMouseEnter={MenuElement}
                         onMouseLeave={LeaveELement}>Events</li>
                        <li className={`${
                            activeElement === 'About us' 
                            ?
                            'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] text-transparent bg-clip-text cursor-pointer'
                            :
                            'text-neutral-400'
                        } transition-all duration-600 ease-in-out`}
                         onMouseEnter={MenuElement}
                         onMouseLeave={LeaveELement}>About us</li>
                    </ul>
                </div>
                <div className="text-2xl flex gap-4 items-center ">
                    <div>
                        <button className= 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)]  text-white cursor-pointer px-4 rounded-full  transform transition-transform duration-700 hover:scale-110'>Log in</button>
                    </div>
                    <button aria-label='basket' className='cursor-pointer' onClick={openModalWindow}>
                        <FontAwesomeIcon icon={faBagShopping} className="px-2 py-1 rounded-full text-white transform transition-transform duration-700 hover:scale-110" style={{ backgroundColor: '#FF6432' }} />
                    </button>
                    <button aria-label='burger-menu' className='cursor-pointer lg:hidden'> 
                        <FontAwesomeIcon icon={faBars} style={{ color: 'FF612E' }} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default NavConteiner;
