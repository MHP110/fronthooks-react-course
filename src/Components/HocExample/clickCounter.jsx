import WithCounter from '../Hoc/withCounter';

const ClickCounter = ({increment, Count}) => {

    return (
        <div>
            <h2 onClick={increment}>clicked {Count} times</h2>
        </div>
      );
}
 
export default WithCounter(ClickCounter, 5);