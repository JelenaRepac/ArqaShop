import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Product({ product, detaljnije, otkaziUpit, strUpit }) {

    return (
        <div className="card"  >
            <img
                className="card-img-top"
                src={product.slika}
                alt="Neka slika"
            />
            <div className="card-body">
                <h5 className="card-title">{product.naziv}</h5>

                {strUpit === 0 ? (
                    <>
                        <p className="card-text">{product.proizvod}</p>
                    </>
                ) : (
                    <p className="card-text">Quantity: {product.kolicina}</p>

                )}

                {strUpit === 0 ? (
                    <>
                        {<button className='posaljiUpit' onClick={() => detaljnije(product.id)}><Link to={"/proizvodi/" + product.id} className='link' >Details</Link></button>}

                    </>
                ) : (
                    <button className='posaljiUpit' onClick={() => otkaziUpit(product.id, product.kolicina)}>Cancel the query</button>

                )}

            </div>
        </div>
    )

}

export default Product
