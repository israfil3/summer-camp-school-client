import React from 'react';
import { Link } from 'react-router-dom';
import logo from './My project (4).png'
import './home.css'

const Home = () => {
    return (
        <>
        <div className="navbar bg-green-100 px-10 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      <div className='grid gap-y-5'>
                      <Link className="btn btn-outline btn-secondary" to={'home'}>Home</Link>
                      <Link className="btn btn-outline btn-success" to={'instructors'}>Instructors</Link>
                      <Link className="btn btn-outline btn-secondary" to={'classes'}>Classes</Link>
                      <Link className="btn btn-outline btn-secondary" to={'dashboard'}>Dashboard</Link>
                      <Link to={'*'}></Link>
                       </div>
                  </ul>
                </div>
                <img className='w-[70px]' src={logo} alt="" />
              </div>
              <div className="navbar-center hidden lg:flex">
                  <div className="nav-area">
                      <Link className="btn btn-outline btn-secondary" to={'home'}>Home</Link>
                      <Link className="btn btn-outline btn-success" to={'instructors'}>Instructors</Link>
                      <Link className="btn btn-outline btn-secondary" to={'classes'}>Classes</Link>
                      <Link className="btn btn-outline btn-secondary" to={'dashboard'}>Dashboard</Link>
                  </div>
              </div>
              <div className="navbar-end">
                <Link className="btn btn-outline btn-success" to={'login'}>Log in</Link>
              </div>
            </div>
        
        </>
        
    );
};

export default Home;