import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import fakedata from '../../MOCK_DATA.json'
import Courses from '../Courses/Courses';
import './Shop.css'

const Shop = () => {
    // console.log (fakedata)
    const [data, setData]= useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        setData(fakedata)
    },[])
    const handleEnrollCourse = (course) => {
        const newCart = [...cart, course]
        setCart (newCart)
        // console.log ("Enrolled course")
    }
    return (
        <div className="shop">
            <div className="course">
                {/* <h2 >This is shop</h2> */}
                {
                    // console.log (data)
                    data.map ( (course) => <Courses course = {course} handleEnrollCourse={handleEnrollCourse}></Courses> )
                }
            </div>
            <div className="cart">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
        
    );
};

export default Shop;