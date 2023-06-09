import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './sing.css'
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Sing = () => {
    const {createUser,googleSing} = useContext(AuthContext)
    const submitParson = (event) => {
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.onlyPassword.value;
            const conformPassword = form.conformPassword.value;
            const url = form.url.value;
            const data = {name,email,password,conformPassword,url}
            console.log(data)
            if(password.length < 6){
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'at list password 6 character!',
                  })
            }
            if( password !== conformPassword) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'conform password and password not same!',
                  })
            }
            createUser(email,password) 
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sing up successful',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  event.target.reset();
            })
            .then(error => {
                console.log(error)
            })

    }
    const googleHandle = () => {
        googleSing()
        .then(result => {
            const parson = result.user;
            console.log(parson)
        })
        .then(error => {
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }
    return (
        <div className='text-center bg-blue-100'>
             <form onSubmit={submitParson} className='form-area text-center'>
                <input type="text" name="name" id="name"  placeholder='Entry Your Name'required/><br />
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="onlyPassword" id="password" placeholder='Entry your password' required/><br />
                <input type="password" name="conformPassword" id="password"  placeholder='Conform your password' required/><br />
                <input type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Sing Up" /><br />
                <p className='tx'>Al-ready you have a account now<Link to={'/login'} className='text-green-500'> Log in </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                
            </form>
            <div className="mx-auto text-center">
                <button onClick={googleHandle} className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
            </div>
           
        </div>
    );
};

export default Sing;