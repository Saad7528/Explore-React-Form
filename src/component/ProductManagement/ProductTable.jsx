import React from 'react';

const ProductTable= ({products}) => {
    return (
        <div>
            <h2>Products: {products.length}</h2>

            <table>
                <thead>
                    <tr>
                        <td>No.</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => 
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        {/* <td>{product.name}</td> */}
                    </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;