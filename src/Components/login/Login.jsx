import React, { useContext } from 'react';
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {singUp,googleSing} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const singMethod = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {email,password};
        console.log(data)
        singUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from,{replace: true})
            event.target.reset();
        })
        .then(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    const googleMethod = () => {
        googleSing()
        .then(result => {
            const validParson = result.user;
            console.log(validParson)
            const userParson = {name:validParson.displayName, email:validParson.email}
                    fetch('https://server-israfil3.vercel.app/parson',{
                        method: 'POST',
                        headers:{
                            'content-type': 'application/json'
                        },
                        body:JSON.stringify(userParson)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            navigate(from,{replace: true});
                        }
                    })
          
        })
        .then(error => {
            console.log(error)
        })
        
    }
    return (
        <div className='bg-red-100'>
            <form onSubmit={singMethod} className='form-area text-center '>
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="password" id="password"  placeholder='Entry your password' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Login" /><br />
                <p className='tx'>Ar you a new user now<Link to={'/sing'} className='text-blue-500'> Sing Up </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
            </form>
            <div className="mx-auto text-center">
                <button onClick={googleMethod} className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Login with Google</button><br /><br />
            </div>
        </div>
    );
};

export default Login;