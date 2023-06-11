import { useQuery } from '@tanstack/react-query';;
import Swal from 'sweetalert2';
const AdminClass = () => {
       const { data: parson = [], refetch} = useQuery(['parson'], async() => {
            const res = await fetch('http://localhost:5000/parson')
            return res.json();
       }
)
       const mackAdmin = (pk) => {
            fetch(`http://localhost:5000/parson/admin/${pk._id}`,{
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${pk.name} has been Admin`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
               
       };
       const mackInstructor = (pk) => {
        fetch(`http://localhost:5000/parson/instructor/${pk._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${pk.name} has been instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                if(pk.role == 'Instructor'){
                    disabled('true')
                }
            }
        })
       }
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
                                    pk.role === 'admin'? 'admin':<button onClick={()=> mackAdmin(pk)} className='btn btn-sm btn-outline btn-success'>Make Admin</button>
                                }
                            </td>
                            <td>
                               {
                                    pk.role === 'Instructor'? 'Instructor': <button disabled={false} onClick={()=> mackInstructor(pk)} className='btn btn-sm btn-outline btn-success'>Make Instructor</button>
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

