import React, { useContext } from 'react';
import './addClass.css'
import { AuthContext } from '../../provider/AuthProvider';
import AdminInfo from '../../adminInfo/AdminInfo';
import InstructorInfo from '../../instructor/InstructorInfo';
import Swal from 'sweetalert2';

const AddClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = AdminInfo();
    const [isInstructor] = InstructorInfo(); 

    const addClassSubject = (event) => {
        event.preventDefault()
        const form = event.target;
        const class_name= form.name.value;
        const img = form.photo.value;
        const instructor_name = form.inName.value;
        const email = form.inEmail.value;
        const available_seats = form.seats.value;
        const price = form.price.value;
        const addClass = {class_name,img,instructor_name,email,available_seats,price}
            axiosSecure.post('/classes',addClass)
            .then(res => {
                console.log(res.data)
                if(res.data){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Add class has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      event.target.reset();
                }
            })
        };

    return (
        <div className='my-10 p-10'>
        <div className="bg-red-200 add-area text-center w-96 mx-auto">
             <form onSubmit={addClassSubject}> 
                    <h1 className='text-3xl text-emerald-400'>Add Class</h1>
                     <input type="text" name="name" id="name" placeholder='Class Name' required/>
                     <input type="url" name="photo" id="photo"  placeholder='Class Image' required/>
                     <input type="text" name="inName" id="inName" value={user.displayName}/>
                     <input type="email" name="inEmail" id="inEmail" value={user.email} />
                     <input type="number" name="seats" id="seats" placeholder='Available seats' required/>
                     <input type="number" name="price" id="price" placeholder='Price' required/>
                     <input className='btn' type="submit" value="Add button" />
             </form>
        </div>
     </div>
    );
};

export default AddClass;