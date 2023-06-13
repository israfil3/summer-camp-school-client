import React, { useEffect, useState } from 'react';
import AdminInfo from '../../adminInfo/AdminInfo';

const EnroleClass = () => {
        const [axiosSecure] = AdminInfo();
        const [enrolled,setEnrolled] =useState ([]);

    useEffect(()=>{
        axiosSecure.get('/payments')
        .then(res => {
            setEnrolled(res.data)
        })
    },[])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                        NO
                    </th>
                    <th>img</th>
                    <th>Class Name</th>
                    <th>Available seats</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    enrolled.map((enroll,index)=>
                        <tr key={enroll._id}>
                            <th>
                                <label>
                                    {index+1}
                                </label>
                            </th>
                            <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={enroll.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                          
                            </div>
                        </div>
                        </td>
                        <td>
                           <div className="font-bold">{enroll.className}</div>
                        </td>
                        <td>{enroll.site}</td>
                        <th>
                            {enroll.price}$
                        </th>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default EnroleClass;