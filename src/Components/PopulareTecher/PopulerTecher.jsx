import React, { useEffect, useState } from 'react';
import AdminInfo from '../adminInfo/AdminInfo';

const PopulerTecher = () => {
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
        <h1 className='text-center text-3xl text-rose-900'>Popular Instructors</h1>
             <div className=" grid lg:grid-cols-6 mx-auto w-[90%] my-10">       
                {
                    popular.map((teacher)=>
                        <div className="">
                            <img className='w-48 h-48' src={teacher.img} alt="" />
                        </div>
                    )
                }
           </div>
        </>

    );
};

export default PopulerTecher;