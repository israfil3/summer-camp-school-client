import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
const AdminClass = () => {
       const [parson,setParson] = useState([])
       useEffect(()=>{
        fetch(`http://localhost:5000/parson`)
        .then(res => res.json())
        .then(data => {
            setParson(data)
        })
       },[]) 

    // const {data: parson = [], refetch} = useQuery(['parson'], async() => {
    //     const res = await fetch(`http://localhost:5000/parson`)
    //     return res.json
    // })
    return (
        <div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                    {
                        parson.map((pk,index)=>
                            <tr>
                            <th>{index+1}</th>
                            <th>{pk.name}</th>
                            <td>{pk.email}</td>
                            <td>
                                {
                                    pk.role === 'admin'? 'admin':<button className='btn btn-sm btn-outline btn-success'>Make Admin</button>
                                }
                            </td>
                            <td>
                            {
                                    pk.role === 'Instructor'? 'Instructor':<button className='btn btn-sm btn-outline btn-success'>Make Instructor</button>
                                }
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
</div>
        </div>
    );
};

export default AdminClass;