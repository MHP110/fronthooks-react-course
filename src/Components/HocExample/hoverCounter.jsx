import WithCounter from '../Hoc/withCounter';

const HoverCounter = ({increment, Count}) => {

    return (
        <div>
            <h2 onMouseOver={increment}>hoverd {Count} times</h2>
        </div>
      );
}
 
export default WithCounter(HoverCounter, 10);