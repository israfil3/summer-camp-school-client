import React from 'react';
import useCart from '../../lodeCart/UseCart';
import { FaMoneyCheck, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import CheckoutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const MyClass = () => {
    const [carts,refetch] = useCart();
    const stripePromise = loadStripe(`${import.meta.env.VITE_pay}`);
        const deleteParson = (items) => {
            fetch(`https://server-israfil3.vercel.app/carts/${items._id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                refetch();
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Save items has been deleted.',
                        'success'
                      )
                }
            })
        };

    return (
        <>
          <div>
            <h3 className='text-center text-4xl my-10'>My Selected Class</h3>
            <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
          </div>
        <div className="">
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No</th>
                    <th>Instructor img</th>
                    <th>Class Name</th>
                    <th>Available seats</th>
                    <th>Price</th>
                    <th>Delete</th>
                    <th>Pay</th>
                </tr>
                </thead>
                <tbody>
                    {
                        carts.map((items,index) => 
                            <>
                                <tr key={items._id}>
                            <th>{index+1}</th>
                            <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={items.img} alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>
                            <div className="font-bold">{items.instructor_name}</div>
                            </td>
                            <td>{items.available_seats}</td>
                            <td>{items.price}$</td>
                            <td>
                              <button onClick={()=>deleteParson(items)} className="btn btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> Delete</button>
                            </td>
                            <td>
                            <label htmlFor="my_modal_6" className="btn btn-ghost btn-xs"><FaMoneyCheck></FaMoneyCheck> Pay</label>
                                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal">
                                    <div className="modal-box">
                                       <Elements stripe={stripePromise}>
                                           <CheckoutForm price={items.price} items={items}></CheckoutForm>
                                       </Elements>
                                     <div className="modal-action">
                                             <label htmlFor="my_modal_6" className="btn">Close!</label>
                                        </div>
                                    </div>
                                 </div>
                                    
                            </td>
                            </tr>   
                            </>                   
                        )
                    }
                </tbody>
            </table>
</div>
            
        </div>       
        </>
    );
};

export default MyClass;