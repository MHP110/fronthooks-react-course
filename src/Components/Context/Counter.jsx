import {useCount, useCountAction} from './CounterProvider'

const Counter = () => {
    const count = useCount();
    const {addOne, addFive, decrement} = useCountAction();

    return ( 
        <>
            <h2>count is: {count}</h2>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>add Five</button>
            <button onClick={decrement}>decrement one</button>
        </>
    );
}
 
export default Counter;