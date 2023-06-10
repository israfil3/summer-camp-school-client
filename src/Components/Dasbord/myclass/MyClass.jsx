import React from 'react';
import useCart from '../../lodeCart/UseCart';
import { FaMoneyCheck, FaTrashAlt } from 'react-icons/fa';

const MyClass = () => {
    let index = 0;
    const [cart] = useCart();
    console.log(cart)
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
                        cart.map((carts,index) => 
                        <tr>
                        <th>{index+1}</th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={carts.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                        </div>
                        </td>
                        <td>
                        <div className="font-bold">{carts.instructor_name}</div>
                        </td>
                        <td>{carts.available_seats}</td>
                        <td>{carts.price}$</td>
                        <th>
                         <button className="btn btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> Delete</button>
                        </th>
                        <th>
                            <button className="btn btn-ghost btn-xs"><FaMoneyCheck></FaMoneyCheck> Pay</button>
                        </th>
                    </tr>
                        )
                    }
  
                {/* row 2 */}

 

                </tbody>
            </table>
</div>
            
        </div>       
        </>
    );
};

export default MyClass;