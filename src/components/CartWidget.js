
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";


function Checkout () {

}

function CartWidget () {
    const {data} = useContext(CartContext);
    console.log(data)
    
    return (
        <>
            <div className="items_in_cart_container">
                {/* {data.map((item) => ( */}
                    <div className="item_in_cart">
                        <p>{data.title}</p>
                        <p>${data.price}</p>
                    </div>
                    
                {/* ))} */}
            </div>
        </>
    )
    
}

export default CartWidget ;