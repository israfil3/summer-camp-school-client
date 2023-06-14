import React, { useEffect, useState } from 'react';

const Teacher = () => {
    const [teacher,setTeacher] = useState([]);
    useEffect(()=>{
        fetch('https://server-israfil3.vercel.app/classes')
        .then(res => res.json())
        .then(data => setTeacher(data))
    },[])
    return (
        <>
        <div className="text-center text-5xl mt-10">
            <h1>Top Instructors</h1>
        </div>
        <hr className='w-64 border-4 border-green-300 mx-auto mt-3'/>
          <div className='grid lg:grid-cols-3 gap-y-5 mx-auto w-[90%] border-4 border-red-300 my-10'>
            {
                teacher.map(tc => <div key={tc.id} className="">
                     {console.log(tc)}
                     <div className="card w-96 bg-base-100 shadow-xl border-4 border-green-100 mx-auto my-5">
                        <figure className="px-10 pt-10">
                            <img src={tc.img} alt="photos" className="rounded-xl w-96 h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Instructor Name: {tc.instructor_name}</h2>
                            <p>Instructor Email: {tc.email}</p>
                            <div className="card-actions">
                            </div>
                        </div>
                        </div>
                </div>
                    )
            }
        </div>
        </>
    );
};

export default Teacher;