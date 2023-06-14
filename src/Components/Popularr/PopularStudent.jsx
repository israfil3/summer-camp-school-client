import React, { useEffect, useState } from 'react';
import AdminInfo from '../adminInfo/AdminInfo';
import ClassOfP from './ClassOfP';

const PopularStudent = () => {
    const [axiosSecure] = AdminInfo();
    const [popular,setPopular] = useState([])
        useEffect(()=>{
            axiosSecure('/classes')
            .then(res =>{
                setPopular(res.data)
            })
        },[])
    return (
        <>
         <h1 className='text-center text-3xl my-10 text-green-800'>Top Popular Class</h1>
           <div className="grid grid-cols-3 gap-4">
                {
                    popular.map((like)=><ClassOfP key={like._id} like={like}></ClassOfP>)
                }
          </div>
        </>

    );
};

export default PopularStudent;