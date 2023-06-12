import React, { useContext } from 'react';
import './addClass.css'
import { AuthContext } from '../../provider/AuthProvider';

const AddClass = () => {
    const {user} = useContext(AuthContext)

    const addClassSubject = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.photo.value;
        const inName = form.inName.value;
        const inEmail = form.inEmail.value;
        const seats = form.seats.value;
        const price = form.price.value;
        const data = {name,url,inName,inEmail,seats,price}
        console.log(data)
    }

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