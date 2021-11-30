import  { Component } from 'react';
import Product from './ProductFunction'

class ProductList extends Component {

    renderProduct = () => {
        const {onChange, onIncrement, onDecrement, onDelete, products} = this.props;
        if (products.length === 0) 
            return <div>your Cart is Empty</div>;

        return products.map((product, index) => {
            return (
                <Product 
                    product = {product}
                    key = {index}
                    onDelete = {() => onDelete(product.id)}
                    onIncrement = {() => onIncrement(product.id)}
                    onDecrement = {() => onDecrement(product.id)}
                    onChange = {(e) => onChange(e, product.id)}
                />
                )
        })
    }

    render() { 
        const {products} = this.props
        return (
            <div className= "text-center">
                {!products.length && <div>Please go to shopping</div>}
                {this.renderProduct()}
            </div>
        );
    }
}
 
export default ProductList;