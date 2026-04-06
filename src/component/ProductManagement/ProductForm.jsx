import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity  );

        if(name.length === 0){
            setError('Please Enter Name')
            return
        }else if (price.length === 0 || price <= 0){
            setError('Please provide Price')
            return
        }else if (quantity.length === 0 || quantity <= 0){
            setError('Please provide Quantity')
            return
        }else{
            setError('')
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        
        console.log(newProduct);
        handleProduct(newProduct);
        
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' className='input' />
                <br /><br />
                <input type="text" name='price' placeholder='Product Price' className='input'/>
                <br /><br />
                <input type="text" name='quantity' placeholder='Product Quantity' className='input'/>
                <br /><br />
                <input type="submit"  className='btn'/>
                <br /><br />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;