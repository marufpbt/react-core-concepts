import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // const products = [
  //   { name: 'Illustrator', price: '$50' },
  //   { name: 'X-box', price: '$70' },
  //   { name: 'BlueStack', price: '$80' },
  //   { name: 'Xiami', price: '$800' }
  // ];
  return (
    <div className="App">
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      } */}
      <Counter></Counter>
      <Show></Show>
    </div>
  );
}

// function Product(props) {
//   const productStyle = {
//     color: 'cyan',
//     backgroundColor: 'grey',
//     width: '400px',
//     padding: '40px',
//     margin: '20px',

//   }
//   return (
//     <div style={productStyle}>
//       <h3>Name:{props.name}</h3>
//       <h1>Price:{props.price}</h1>
//       <button>Buy Now</button>
//     </div>
//   )
// }


function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Show() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data) })
  }, [])

  return (
    <div>
      <h3>Dynamic Users:</h3>
      <ul>
        {
          users.map(d =>
          <li>{d.email}  {d.email}</li>
          )
        }
      </ul>
    </div>
  )
}


export default App;
