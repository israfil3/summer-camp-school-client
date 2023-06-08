import React, { useEffect, useState } from 'react';

const Teacher = () => {
    const [teacher,setTeacher] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/teacher')
        .then(res => res.json())
        .then(data => setTeacher(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 gap-16 px-10'>
            {
                teacher.map(tc => <div key={tc.id} className="">
                     {console.log(tc)}
                     <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={tc.img} alt="photos" className="rounded-xl w-96 h-96" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{tc.name}</h2>
                            <p>{tc.email}</p>
                            <div className="card-actions">
                            </div>
                        </div>
                        </div>
                </div>
                    )
            }
        </div>
    );
};

export default Teacher;