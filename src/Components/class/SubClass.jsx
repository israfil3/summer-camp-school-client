import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../lodeCart/UseCart';
import MainAdmin from '../mainAdmin/MainAdmin';
import InstructorInfo from '../instructor/InstructorInfo';


const SubClass = ({ck}) => {
    const {user} = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = MainAdmin();
    const [isInstructor] = InstructorInfo(); 
    const {img,class_name,instructor_name,available_seats,price,_id,studentCount} = ck;
    const SelectClass =() => {
        if(user && user.email){
            const oderItem = {img,class_name,instructor_name,available_seats,price,email: user.email,cartId:_id}
            fetch(`https://server-israfil3.vercel.app/carts`,{
                method:"POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(oderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'item has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                
            })
        }
        else {
            Swal.fire({
                title: 'Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
              })
        }
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
                            <p>Total Student: {studentCount}</p>
                            <p>price: {price}$</p>
                            <div className="card-actions">
                               {
                                isAdmin?<button className='btn' disabled>Select</button>: 
                                isInstructor?<button className='btn' disabled>Select</button>:
                                <Link onClick={()=>SelectClass()}  className="btn btn-outline btn-primary">Select</Link>
                               }
                            </div>
                        </div>

                        </div>
                </>
        </div>
    );
};

export default SubClass;