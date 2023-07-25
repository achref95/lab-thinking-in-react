const SearchBar = ({ handleSearch, filteredProducts, inStock }) => {
    return (
        <div>
        <h6 class="mb-2">Search</h6>
        <form>
            <input 
                class="input input-bordered input-primary w-full max-w-xs" 
                type="text" 
                placeholder="Search for products"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <div class="flex justify-center">
                <input 
                    type="checkbox"
                    onChange={(e) => filteredProducts(e.target.value) }
                    checked={inStock}
                />
                <p class="ml-2">Only show products in stock</p>
            </div>
        </form>
        </div>
        
    )
}

export default SearchBar;