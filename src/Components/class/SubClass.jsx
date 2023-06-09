import React from 'react';

const SubClass = ({ck}) => {
    const {img,class_name,instructor_name,available_seats,price,_id} = ck;
    const SelectClass =(_id) => {
        console.log(_id)
    }
    return (
        <div>
            <>
                  <div className="card w-96 bg-base-100 shadow-xl border-4 border-green-100 mx-auto my-5">
                        <figure className="px-10 pt-10">
                            <img  src={img} alt="Shoes" className="rounded w-96 h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Class Name: {class_name}</h2>
                            <p>Instructor Name: {instructor_name}</p>
                            <p>Available Seats: {available_seats}</p>
                            <p>price: {price}$</p>
                            <div className="card-actions">
                                 <button onClick={()=>SelectClass(ck)} className="btn btn-outline btn-primary">Select</button>
                            </div>
                        </div>

                        </div>
                </>
        </div>
    );
};

export default SubClass;