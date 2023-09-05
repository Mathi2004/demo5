import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Cart({ cartItems }) {

    const[det, setDet] = useState([]);

    // function postcart(){
        // useEffect(()=>{
            // cartItems.forEach((item)=>{
            //     setDet(prevState => ({
            //         ...prevState,
            //         name: item.name,
            //         price : item.price
            //     }));
            //     console.log(det);
            // })
        // },[det])
        // axios.post('http://localhost:8080/addcart', cartItems)
        // .then((response)=>{
        //     console.log(response.data)
        // })
    // }
  return (
    
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price}
          </li>
        ))}
      </ul>
    </div>
  
  );
}

export default Cart;
