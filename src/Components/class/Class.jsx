import React, { useEffect, useState } from 'react';
import SubClass from './SubClass';

const Class = () => {
    const [classes,setClasses] = useState([])
    useEffect(()=>{
        fetch('https://server-israfil3.vercel.app/classes')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-y-5 mx-auto w-[90%] border-4 border-red-300 my-10'>
            {
                classes.map(ck=> <SubClass key={ck._id} ck={ck}></SubClass> )
            }
        </div>
    );
};

export default Class;