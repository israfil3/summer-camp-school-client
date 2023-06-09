import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './sing.css'

const Sing = () => {
    return (
        <div className='text-center bg-blue-100'>
             <form className='form-area text-center'>
                <input type="text" name="name" id="name"  placeholder='Entry Your Name'required/><br />
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="password" id="password"  placeholder='Entry your password' required/><br />
                <input type="password" name="conformPassword" id="password"  placeholder='Conform your password' required/><br />
                <input type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Sing Up" /><br />
                <p className='tx'>Al-ready you have a account now<Link to={'/login'} className='text-green-500'> Log in </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                
            </form>
            <div className="mx-auto text-center">
                <button  className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
            </div>
           
        </div>
    );
};

export default Sing;