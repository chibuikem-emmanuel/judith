import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/contact';



function App() {

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: '../public/favicon.svg'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: '../public/favicon.svg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: '../public/favicon.svg'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 49.99,
      image: '../public/favicon.svg'
    },
    
  ];


  return (
    <div className="App">
        <Navbar />
         <Hero />
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {products.map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      <Contact />
   
    </div>
  );
}

export default App;