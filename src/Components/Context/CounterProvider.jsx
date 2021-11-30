import React from 'react'
import { useState, useContext } from 'react';

const CounterContext = React.createContext()
const CounterContextDispatCher = React.createContext()

const CounterProvider = ({Children}) => {
    const [count, setCount] = useState(0);
    
    return (
        <CounterContext.Provider value= {count}>
            <CounterContextDispatCher.Provider value= {setCount}>
                {Children}
            </CounterContextDispatCher.Provider>
        </CounterContext.Provider>
    );
}
 
export default CounterProvider;

export const useCount = () => useContext(CounterContext); 
export const useCountAction = () => useContext(CounterContextDispatCher);