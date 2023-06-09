import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='bg-red-100'>
            <form className='form-area text-center '>
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="password" id="password"  placeholder='Entry your password' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Login" /><br />
                <p className='tx'>Ar you a new user now<Link to={'/sing'} className='text-blue-500'> Sing Up </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
            </form>
            <div className="mx-auto text-center">
                <button  className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Login with Google</button><br /><br />
            </div>
        </div>
    );
};

export default Login;