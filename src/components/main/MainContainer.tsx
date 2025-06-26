import {useEffect, useState} from 'react';
// @ts-ignore
import { pizzaDb } from '../../../pizza-db-config';
import PizzaCard from './PizzaCard';
import About from './About';
export interface PizzaItem {
  id: number;
  img: string;
  name: string;
  Filling: string;
  price: number;
  Categories: string[];
}

const MainContainer = () => {
    const [paintingButtons, setPaintingButtons] = useState<string[]>(['Show All'])
    const [filteredPizzas, setFilteredPizzas] = useState<PizzaItem[]>([]);

    const PizzaDB = pizzaDb
    useEffect(() => {
        const newFilteredPizzas = PizzaDB.filter((filterElements: PizzaItem) => {
            return filterElements.Categories.includes(paintingButtons[0]);
        });
        setFilteredPizzas(newFilteredPizzas);
        
    },
    [paintingButtons])

    return (
        <>
            <div className='p-4'>
                <h2 className='text-4xl text-center text-white '>Menu</  h2>
            </div>
            <div className='flex text-2xl text-white gap-4 flex-wrap justify-around pt-4 lg:justify-center lg:gap-6 '>
                <button className={`${
                    paintingButtons.includes("Show All")
                    ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] transform transition-transform hover:scale-110 duration-600'
                    : 
                  'bg-[rgba(33,10,1,1)] rounded-full px-4 py-1 cursor-pointer transform transition-transform hover:scale-110 duration-600'
                } rounded-full px-2 cursor-pointer `}
                onClick={() =>setPaintingButtons(['Show All'])}>Show All</button>
                <button className={`${
                    paintingButtons.includes("Meat")
                    ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] transform transition-transform hover:scale-110 duration-600'
                    : 
                  'bg-[rgba(33,10,1,1)] rounded-full px-4 py-1 cursor-pointer transform transition-transform hover:scale-110 duration-600'
                } rounded-full px-2 cursor-pointer `}
                onClick={() =>setPaintingButtons(['Meat'])}>Meat</button>
                <button  className={`${
                    paintingButtons.includes("Vegetarian")
                    ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] transform transition-transform hover:scale-110 duration-600'
                    : 
                  'bg-[rgba(33,10,1,1)] rounded-full px-4 py-1 cursor-pointer transform transition-transform hover:scale-110 duration-600'
                } rounded-full px-2 cursor-pointer `}
                 onClick={() =>setPaintingButtons(['Vegetarian'])}>Vegetarian</button>
                <button  className={`${
                    paintingButtons.includes("Sea products")
                    ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] transform transition-transform hover:scale-110 duration-600'
                    : 
                  'bg-[rgba(33,10,1,1)] rounded-full px-4 py-1 cursor-pointer transform transition-transform hover:scale-110 duration-600'
                } rounded-full px-2 cursor-pointer `}
                 onClick={() =>setPaintingButtons(['Sea products'])}>Sea products</button>
                <button className={`${
                    paintingButtons.includes("Mushroom")
                    ? 'bg-gradient-to-r from-[rgba(255,162,41,1)] to-[rgba(255,89,36,1)] transform transition-transform hover:scale-110 duration-600'
                    : 
                  'bg-[rgba(33,10,1,1)] rounded-full px-4 py-1 cursor-pointer transform transition-transform hover:scale-110 duration-600'
                } rounded-full px-2 cursor-pointer `}
                 onClick={() =>setPaintingButtons(['Mushroom'])}>Mushroom</button>
            </div>
            <div className='flex flex-wrap gap-2 p-4 '>
                <img src="/Menu.png" alt="img menu" className='absolute -z-10' />
                <div className='flex  gap-5 flex-wrap w-[100vw] justify-center items-center'>
                    {filteredPizzas.length === 0 ? 
                        <div className='text-4xl text-white text-center p-4 '>
                            Sorry, dont't have product
                        </div>
                    :
                    filteredPizzas.map((item: PizzaItem) => {
                        const element = []

                        
                        element.push (<PizzaCard key={item.id} item={item} />)
                        if (item.id === 4) {

                            element.push(
                                <div key={`ad-index-${item.id}`} className='w-full text-center p-4 mt-4 relative'>
                                    <h1 className='absolute text-white text-[1.7rem] top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 whitespace-nowrap'>MOST POPULAR PIZZA</h1>
                                    <img src="/pizzaImg/bgImg.png" alt="Special Offer" className='w-full h-auto max-w-sm mx-auto' />
                                </div>
                            );
        
                        }
                        
                        return element
                        })}
                </div>
            </div>
            <About />
        </>
    );
};

export default MainContainer;