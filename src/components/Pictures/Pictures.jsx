import React, { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
'framer-motion/client';
const Pictures = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json').then(res=> res.json())
        .then(data=>setCards(data))
    },[])
    return (
      <div className='bg-yellow-100 text-center'>
         <h1 className='text-5xl text-red-700 font-bold p-2'>বাঙালি <span className='text-yellow-600'>ভোজন</span></h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  
        bg-gradient-to-b from-yellow-100 to-red-100 p-10 rounded-lg'>

           {
            cards.map(card=><Card
            key={card.id}
            card ={card}
            ></Card> )
           }
        </div>
        </div>  
    );
};

export default Pictures;