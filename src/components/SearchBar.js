const SearchBar = ({ handleSearch }) => {
    return (
        <div>
        <h6>Search</h6>
        <form>
            <input 
                type="text" 
                placeholder="Search for products"
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
        </div>
        
    )
}

export default SearchBar;