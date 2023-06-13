import React, { useEffect, useState } from 'react';
import AdminInfo from '../../adminInfo/AdminInfo';

const Payment = () => {
    const [axiosSecure] = AdminInfo();
    const [paymentHistory,setPaymentHistory] =useState([]);

    useEffect(()=>{
        axiosSecure.get('/payments')
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