import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Product name='Mobile'/>
      <Product name='Watch'/>
      <Product name='Laptop'/>
      <Product name='Bluetooth'/>
    </div>
  );
}


const Product = (props) => {
  const styleProps = {
    backgroundColor: 'Skyblue',
    color: 'White',
    padding: '10px',
    margin: '10px'
  }
  const btnStyle= {
    backgroundColor:'tomato',
    padding:'5px',
    margin: '0.5px 1px',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer'
  }

  const [price, setPrice] = useState(1)
  return (
    <div style={styleProps}>
      <h2>Name: {props.name} </h2>
      <h4>Price: {price} </h4>
      <button style={btnStyle}>Increase price</button>
      <button style={btnStyle}>Decrease price</button>
    </div>
  )
}

export default App;
