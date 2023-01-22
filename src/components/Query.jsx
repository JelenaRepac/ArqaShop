
import React from 'react';
import Product from './Product';

function Upit({ product,products,detaljnije, posaljiUpit}) {
    
    
    return (
        <div className='div'>
            <div className='gridDiv'>
                <div className='product-img'>
                    <img src={product.slika}></img>
                </div>
                <div className='product-info'>
                    <h2 className='product-name'>{product.naziv}</h2>

                    <p className='dp' ><b>Product key: {product.id}</b></p>
                    <p className='dp'>Price: <b>{product.cena} rsd</b></p>
                    <p className='dp'> {product.opis}</p>
                    <label className='dpl' >Quantity

                        <input type="number" min="0" name="name" id="kol"style={{ width: 100 + "px", marginLeft: 10 + "px" }} />
                    </label><br></br>
                   
                    <button className='btnUpit' onClick={() => posaljiUpit(product.id, document.getElementById("kol").value)} >Add to cart</button>

                    
                </div>
            </div>
            <div className="all-products">
                {products.map((prod) => {
                    
                    return <Product product={prod} detaljnije={detaljnije} key={prod.id} strUpit={0} />;

                })}

                </div>
                
                
            
        </div>
        
    )
}

export default Upit
