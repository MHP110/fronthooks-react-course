import { useState } from 'react';

const WithCounter = (WrappedComponent, incrementValue) => {
    const UpdatedComp = () => {
        const [Count, setCount] = useState(0)
        const increment = () => {
            setCount(Count + incrementValue)
        };
        return <WrappedComponent Count= {Count} increment= {increment}/>;
    }
    return (UpdatedComp);
}

export default WithCounter;