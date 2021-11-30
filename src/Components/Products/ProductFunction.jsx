import { BsTrash } from "react-icons/bs";
import styles from './ProductFunction.module.css';

const Product = ({product, onChange, onIncrement, onDecrement, onDelete}) => {

    return (
        <div className='flex justify-between items-center bg-white w-6/12 h-32 border-2 border-purple-200 rounded-lg mx-auto my-2 px-5'>
            <span >Name: {product.name}</span>
            <input type="text" 
                onChange= {onChange} 
                value= {product.name}
                className={`${styles.nameInput}`}>
            </input>
            <span className="">Price: {product.price}</span>
            <span className="w-8 h-8 border-2 border-blue-500 rounded-full text-center">{product.quantity}</span>
            <button onClick = {onIncrement} className="w-8 h-8 text-lg py-auto border-2 rounded-lg bg-purple-200 border-purple-500 text-purple-500">+</button>
            <button onClick = {onDecrement} className={`${styles.decBtn} ${product.quantity === 1 && styles.removeTrash}`}>
                {product.quantity > 1 ? "-" : <BsTrash />} 
            </button>
            <button onClick = {onDelete} className="border-2 rounded-lg px-6 py-1 border-purple-500 text-purple-500">delete</button>
        </div>
    );
}

export default Product;