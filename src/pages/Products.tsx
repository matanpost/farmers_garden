import React from 'react';
import ProductCard from '../components/productCard/ProductCard';
import * as data from "../data/items.json"

const itemsString = JSON.stringify(data);
const items = JSON.parse(itemsString).items
console.log(items);


function Products() {
  console.log(items);
  
  return (
    <div className="App">
      <ProductCard items={items} />
    </div>
  );
}

export default Products;
