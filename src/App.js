import React from 'react';
import './App.css';
import "./component/ProductTable";
import ProductTable from './component/ProductTable'
const product = [
  { name: "gg", category: "Electronics", price: 200 },
  { name: "QQ", category: "Clothes",  price: 150 }
  
];
 
function App() {
  return (
    <div className="App">
      <ProductTable product={product} />
      
    </div>
  );
}

export default App;
