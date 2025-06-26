import { createContext, useEffect, useState} from 'react'
import type { Dispatch, SetStateAction } from 'react';
import './App.css'
import NavConteiner from './components/nav/NavConteiner'
import HeaderContainer from './components/header/HeaderContainer'
import MainContainer from './components/main/MainContainer'
// @ts-ignore
import { Footer } from './components/footer/footer';



const setBasketnull: Dispatch<SetStateAction<basketInfo []>> = () => {
  console.log('Error');
  
};

interface basketInfo { 
  id: string,
  name: string,
  img: string,
  price: number,
}
interface valueInfo {
  basket: basketInfo[],
  setBasket : React.Dispatch<React.SetStateAction<basketInfo []>>,
}

export const BasketContainer = createContext<valueInfo>({basket: [], setBasket: setBasketnull})

function App() {

  const [basket, setBasket]  = useState<basketInfo [] >([])    
  
  return (
    <>
      <BasketContainer.Provider value={{ basket, setBasket}}> 
        <NavConteiner />
        <HeaderContainer />
        <MainContainer />  
      </BasketContainer.Provider>
      <Footer />
    </>
  )
}

export default App
