import React, { useEffect, useState } from 'react';
import AdminInfo from '../adminInfo/AdminInfo';
import ClassOfP from './ClassOfP';

const PopularStudent = () => {
    const [axiosSecure] = AdminInfo();
    const [popular,setPopular] = useState([])
        useEffect(()=>{
            axiosSecure('/classes')
            .then(res =>{
                // setPopular(res.data)
                const sortedClasses = res.data.sort((a, b) => b.studentCount - a.studentCount);
                // Get the top 6 classes
                const topClasses = sortedClasses.slice(0, 6);
                setPopular(topClasses);
            })
        },[])
    return (
        <>
         <h1 className='text-center text-3xl my-10 text-green-800'>Top Popular Class</h1>
           <div className="grid lg:grid-cols-3 gap-4">
                {
                    popular.map((like)=><ClassOfP key={like._id} like={like}></ClassOfP>)
                }
          </div>
        </>

    );
};

export default PopularStudent;