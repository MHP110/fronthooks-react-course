import {useEffect, useState} from 'react';

const TimerFunc = () => {
    const [count, setCount] = useState(0),
    return ( 
         useEffect(() => {
             setInterval(() => {
                 console.log("hi")
                 setCount(count + 1)
             }, 1000)
             return () => {
                 clearInterval()
             }
         }, []) 
     );
}
 
export default TimerFunc;