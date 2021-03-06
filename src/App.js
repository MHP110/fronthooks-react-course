import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import ProductList from './Components/Products/ProductListClass';
import NavBar from './Components/NavBar/NavBar'
import TimerClass from './Components/Timer/timerClass';
import ClickCounter from './Components/HocExample/clickCounter';
import HoverCounter from './Components/HocExample/hoverCounter';
import FunctionalRef from './Components/RefComponent/FunctionalRef';
import ClassRef from './Components/RefComponent/ClassRef';
import CounterProvider from './Components/Context/CounterProvider';
import CounterOne from './Components/Context/Counter';
import { render } from '@testing-library/react';



class App extends Component {
  state = {
    products: [
      {name: "Laptop", price: "100T", quantity: "2", id: 1},
      {name: "Pc", price: "90T", quantity: "2", id: 2},
      {name: "Airpods", price: "80T", quantity: "2", id: 3},
    ],
  }

  changeHandler = (e, id) => {
    console.log(e.target.value, id);
    const products = [...this.state.products]
    const selectedItem = this.state.products.find((p) => p.id === id);
    selectedItem.name = e.target.value;
    this.setState({products})
  }
  
  incrementHandler = (id) => {
    // index
    const index = this.state.products.findIndex((item) => item.id === id);
    
    //clone the selected index and update the quantity
    const product = {...this.state.products[index]};
    product.quantity++;
  
    //update products
    const products = [...this.state.products];
    products[index] = product;
    this.setState({products});
  };
  
  decrementHandler = (id) => {
      const index = this.state.products.findIndex((item) => item.id === id);
      const product = {...this.state.products[index]};
      if (product.quantity === 1) {
        const filteredProducts = this.state.products.filter((p) => p.id !== id);
        this.setState({products: filteredProducts})
    } else {
          const products = [...this.state.products]
          product.quantity--;
          products[index] = product;
          this.setState({products});
        }
    };
    
    removeHandler = (id) => {
        console.log('Item clicked', id);
        const filteredProducts = this.state.products.filter((p) => p.id !== id);
        this.setState({products: filteredProducts});
      };

  render() {
    return (
      <div className="">
        <CounterProvider>
          <p>welcome to counter</p>
          <CounterOne />
        </CounterProvider>
        {/* <NavBar totalItems= {this.state.products.filter((p) => p.quantity > 0).length}/>
        <ProductList 
          products= {this.state.products} 
          onChange= {this.changeHandler}
          onIncrement= {this.incrementHandler}
          onDecrement= {this.decrementHandler}
          onDelete = {this.removeHandler}/> */}
      </div>
    );
  }
}

export default App;
