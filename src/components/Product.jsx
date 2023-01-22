import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Product({ product }) {

    return (
        <div className="card"  >
            <img
                className="card-img-top"
                src={product.slika}
                alt="Neka slika"
            />
            <div className="card-body">
                <h5 className="card-title">{product.naziv}</h5>

               
              

            </div>
        </div>
    )

}

export default Product
