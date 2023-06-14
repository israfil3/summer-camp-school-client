import React from 'react';

const ClassOfP = ({like}) => {
    console.log(like)
    return (
    <div className="card w-84 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={like.img} alt="img" className="rounded-xl w-72 h-72" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Class Name: {like.class_name}</h2>
          <h2>Instructor Name: {like.instructor_name}</h2>
          <p>Email: {like.email}</p>
          <p>Price: {like.price}$</p>
          <p>Total student: {like.studentCount}</p>
        </div>
      </div>
    );
};

export default ClassOfP;