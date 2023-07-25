import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)

  const handleSearch = (searchList) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchList.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;