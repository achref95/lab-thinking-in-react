const SearchBar = ({ handleSearch, filteredProducts, inStock }) => {
    return (
        <div>
        <h6 className="mb-2">Search</h6>
        <form>
            <input 
                className="input input-bordered input-primary w-full max-w-xs mb-6" 
                type="text" 
                placeholder="Search for products"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="flex justify-center mb-6">
                <input 
                    className="checkbox checkbox-primary"
                    type="checkbox"
                    onChange={(e) => filteredProducts(e.target.value) }
                    checked={inStock}
                />
                <p className="ml-2 ">Only show products in stock</p>
            </div>
        </form>
        </div>
        
    )
}

export default SearchBar;