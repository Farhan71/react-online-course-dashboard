import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log (props.cart)
    const cart = props.cart
    let totalPrice = 0;
    // totalPrice = totalPrice + 
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + parseFloat(course.price) 
        
    }
    totalPrice = totalPrice.toFixed(2)
    const cardWidth = {
        width: "20 rem",
        height: "200px"
    }


    return (
        

        <div className="card cart-details" style={cardWidth}>
        <div className="card-body">
        <h5 className="card-title">Cart</h5>
        <p className="card-text">  {/* <h3>Hello from cart component</h3> */}
            <p>Total Enrolled Course: {cart.length}</p> 
            {/* {
                cart.map ((course)=> <h2 style ="visibility: none;"> {totalPrice = totalPrice + parseFloat(course.price )}</h2>  )
            } */}
            <p>Total Price: ${totalPrice} </p>
        </p>
        <button className="btn btn-primary">Go somewhere</button>
        </div>
        </div>
    );
};

export default Cart;