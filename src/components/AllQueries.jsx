import React from 'react'
import Product from './Product';


function SviUpiti({ upiti, otkaziUpit, totalPrice, potvrdiPorudzbinu }) {
    return (
        <>  
        <div className="all-products main">
            
            {upiti.map((upit) => {
                return <Product product={upit} strUpit={1} otkaziUpit={otkaziUpit}/>;
            })}

           
        </div>

  

       {upiti.length === 0 ? (
                    <>
                       <div style={{marginBottom: 33+"%"}} className="emptyCart">The cart is empty!
                       
                       </div>
                       
                    </>
                ) : (
                    <>
                    <div className='ukupno'>Total price: {totalPrice}</div>
                    <button className='potvrdiPorudzbinu' onClick={potvrdiPorudzbinu}>Confirm the order</button> </>
                )}
                <div id="uspešno" style={{ visibility: "hidden" }}>
                The order was successfully forwarded.
        </div>
</>

    )
}

export default SviUpiti
