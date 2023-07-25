import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  const [inStock, setInstock] = useState(false);


  const handleSearch = (searchList) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchList.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const filteredProducts = () => {
    if (inStock) {
      setProducts(jsonData)
    } else {
      const filteredProducts = jsonData.filter((product) => {
        return product.inStock
      })
      setProducts(filteredProducts)
    }
    setInstock(!inStock)
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearch={handleSearch} filteredProducts={filteredProducts} inStock={inStock} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;