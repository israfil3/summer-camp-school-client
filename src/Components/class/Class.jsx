import React, { useEffect, useState } from 'react';

const Class = () => {
    const [classes,setClasses] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-y-5 mx-auto w-[90%] border-4 border-red-300 my-10'>
            {
                classes.map(ck=> <>
                  <div className="card w-96 bg-base-100 shadow-xl border-4 border-green-100 mx-auto my-5">
                        <figure className="px-10 pt-10">
                            <img  src={ck.img} alt="Shoes" className="rounded w-96 h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Class Name: {ck.class_name}</h2>
                            <p>Instructor Name: {ck.instructor_name}</p>
                            <p>Available Seats: {ck.available_seats}</p>
                            <p>price: {ck.price}$</p>
                            <div className="card-actions">
                                 <button class="btn btn-outline btn-primary">Select</button>
                            </div>
                        </div>

                        </div>
                </>)
            }
        </div>
    );
};

export default Class;