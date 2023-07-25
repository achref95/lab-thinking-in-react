const SearchBar = ({ handleSearch, filteredProducts, inStock }) => {
    return (
        <div>
        <h6>Search</h6>
        <form>
            <input 
                type="text" 
                placeholder="Search for products"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <input 
                type="checkbox"
                onChange={(e) => filteredProducts(e.target.value) }
                checked={inStock}
            />
            <p>Only show products in stock</p>
        </form>
        </div>
        
    )
}

export default SearchBar;