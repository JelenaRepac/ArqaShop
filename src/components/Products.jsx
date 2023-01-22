import React from 'react'
import Product from './Product';

const Products = ({ products, detaljnije }) => {
    return (
        <div className="all-products">
            {products.map((prod) => {
                return <Product product={prod} />;
            })}
        </div>
    );
};

export default Products