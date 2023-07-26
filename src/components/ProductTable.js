const ProductTable = ({ products }) => {
    return (
      <div className="overflow-x-auto mr-32 ml-32">
        <table className="table">
          <thead>
            <tr style={{backgroundColor: 'lightgrey'}}>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
            <tr className="hover" key={product.id} style={{ color: product.inStock ? 'black' : 'red' }}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProductTable;