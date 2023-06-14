import React, { useEffect, useState } from 'react';
import AdminInfo from '../adminInfo/AdminInfo';

const PopulerTecher = () => {
    const [axiosSecure] = AdminInfo();
    const [popular,setPopular] = useState([])
        useEffect(()=>{
            axiosSecure('/classes')
            .then(res =>{
                const sortedClasses = res.data.sort((a, b) => b.studentCount - a.studentCount);
                const topClasses = sortedClasses.slice(0, 6);
                setPopular(topClasses);
                console.log(topClasses)
            })
        },[])
    return (
        <>
        <h1 className='text-center text-3xl text-rose-900'>Popular Instructors</h1>
             <div className="grid sm:grid-cols-1 lg:grid-cols-6 mx-auto lg:w-[90%] lg:my-10">       
                {
                    popular.map((teacher)=>
                        <div className="mx-auto">
                            <img className='w-48 h-48' src={teacher.img} alt="" />
                        </div>
                    )
                }
           </div>
        </>

    );
};

export default PopulerTecher;