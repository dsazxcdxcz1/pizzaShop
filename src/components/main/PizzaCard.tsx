import { useContext, useEffect, useRef, useState} from "react";
import type {PizzaItem} from './MainContainer'
import { BasketContainer } from "../../App";


const PizzaCard = ({item}: {item: PizzaItem}) => {

    const [countQuantity, setCountQuantity]  = useState<number>(1)
                        
    const [countPrice, setCountPrice] = useState<number>(item.price)
    
    const [selectedButton, setSelectedButton] = useState('28');

    const namePizza = useRef<HTMLDivElement>(null)
    
    const imgPizza = useRef<HTMLImageElement>(null)
    
    const pricePizza = useRef<HTMLDivElement>(null)

    const contextValue = useContext(BasketContainer)

    const { basket, setBasket } = contextValue;


    function addCount(){
        setCountQuantity(countQuantity + 1)
        const newQuantity = countPrice + item.price;
        setCountPrice(parseFloat(newQuantity.toFixed(2)))
        
    }
    function takeAwayCount(){
        if (countQuantity !== 0){
            setCountQuantity(countQuantity - 1) 
            const newPrice = countPrice - item.price;
            setCountPrice(parseFloat(newPrice.toFixed(2)))
        } else{
            setCountPrice(0)
            setCountQuantity(0)
        } 
    }
    function baskets(){
        setBasket([...basket, 
            {
            id:  crypto.randomUUID(),
            name: namePizza.current!.innerText, 
            img: imgPizza.current!.src, 
            price: countPrice
            }
        ])
    }
    function priceProduct(e: React.SyntheticEvent){
        if(e.currentTarget.innerHTML  === '22'){
            setSelectedButton('22')
            setCountPrice(countPrice - 2) 
        } else if (e.currentTarget.innerHTML === '33'){
            setSelectedButton('33')
            setCountPrice(countPrice + 4)
        } else(
            setSelectedButton('28')
        )
        
    }
    return (
        <div className='flex flex-col justify-center items-center text-white text-center mt-8 rounded-xl max-w-xs w-full' style={{backgroundColor: 'rgba(33, 10, 1, 1)'}} >    
            <img src={item.img} alt="pizza img munu" ref={imgPizza} />
            <h3 className='text-xl' ref={namePizza}>{item.name}</h3>
            <p style={{color: 'rgba(163, 163, 163, 1)'}}
             className='max-w-xs pt-2 text-sm'>{item.Filling}</p>
            <div className='flex gap-5 pt-4' >
                <button className={`${
                        selectedButton === '22'
                            ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)]'
                            : 'border border-white'
                    } rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
                    onClick={priceProduct}>22</button>
                <button
                    className={`${
                        selectedButton === '28'
                            ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)]'
                            : 'border border-white'
                    } rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
                    onClick={priceProduct}
                >
                    28
                </button>
                <button className={`${
                        selectedButton === '33'
                            ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)]'
                            : 'border border-white'
                    } rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
                    onClick={priceProduct}>33</button>
            </div>
            <div className='mt-4 border border-orange-500 text-orange-500 px-4 py-2 rounded-full'>
                <button className="cursor-pointer">+ Ingridients</button>
            </div>
            <div className='flex gap-[4rem] items-center pt-4'>
                <div className='text-white text-xl'>
                    <h3 ref={pricePizza}>{countPrice}$</h3>
                </div>
                <div className='flex gap-2'>
                    <button className='border border-gray-400 text-gray-400 px-2  rounded-full cursor-pointer' onClick={takeAwayCount}>-</button>
                    <h3>{countQuantity}</h3>
                    <button className='text-white bg-gradient-to-r from-[rgba(255,89,36,1)] to-[rgba(255,162,41,1)] px-2 rounded-full cursor-pointer' onClick={addCount}>+</button>
                </div>
            </div>
            <div className='bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] mt-4 px-5 rounded-full py-2 mb-4 cursor-pointer'>
                <button onClick={baskets} className="cursor-pointer">Order Now</button>
            </div>
        </div>
    )
}

export default PizzaCard