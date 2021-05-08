import React from 'react';
import './Courses.css'

const Courses = (props) => {
    // console.log (props)
    const {course_name, instructor_name, price, rating, taken_by, ask_anything_at}= props.course
    const handleEnrollCourse = props.handleEnrollCourse
    const cardWidth = {
        width: "900px"
    }
    return (
        
           
        <div className="card course_detail" style={cardWidth}>
        <div className="card-body">
          <h5 className="card-title text-danger" > Course name:- {course_name}</h5>
          <p className="card-text">
                <p> Instructor: {instructor_name}</p>
                <p> Price: ${price}</p>
                <p> Rating: {rating}</p>
                <p> Taken by: {taken_by} students</p>
                <p> Ask anything at: {ask_anything_at}</p>
            </p>
          <button className="btn btn-primary" onClick={()=> handleEnrollCourse(props.course)}> Enroll Now</button>
        </div>
      </div>
        
    );
};

export default Courses;