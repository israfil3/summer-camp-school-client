import React, { useContext, useEffect, useState } from 'react';
import AdminInfo from '../../adminInfo/AdminInfo';
import { AuthContext } from '../../provider/AuthProvider';

const Payment = () => {
    const [axiosSecure] = AdminInfo();
    const [paymentHistory,setPaymentHistory] =useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        axiosSecure.get(`/payments/${user?.email}`)
        .then(res => {
            setPaymentHistory(res.data)
        })
    },[])

    return (
        <div className="overflow-x-auto text-center">
            <table className="table ">
            {/* head */}
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>TransactionId</th>
                </tr>
            </thead>
            <tbody>
            {
                paymentHistory.map((history,index)=>
                    <tr key={history._id}>
                        <th>{index+1}</th>
                        <th>{history.name}</th>
                        <td>{history.email}</td>
                        <td>{history.transactionId}</td>
                    </tr>
                )
            }
            </tbody>
            </table>
      </div>
    );
};

export default Payment;