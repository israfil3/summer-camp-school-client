import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaWallet,FaBookOpen,FaBookMedical } from 'react-icons/fa';


const Dashboard = () => {
        const admin = true;
        const userRoll = 'admin';
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <Outlet></Outlet>
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
                admin?<>
                      <h1 className='text-center text-3xl my-3 '>Admin Panel</h1>
                      <Link className="btn btn-outline btn-secondary" to={'myClass'}> <FaBookMedical></FaBookMedical>Manage Classes</Link>
                      <Link className="btn btn-outline btn-secondary my-5" to={'enrolClass'}> <FaBookOpen></FaBookOpen>Manage Users</Link>
                      <div className="divider"></div> 
                      <Link className="btn btn-outline btn-secondary" to={'/home'}>Home</Link>
                </>:<>
                    <h1 className='text-center text-3xl my-3 '>Student Panel</h1>
                    <Link className="btn btn-outline btn-secondary" to={'myClass'}> <FaBookMedical></FaBookMedical> My Selected Classes</Link>
                    <Link className="btn btn-outline btn-secondary my-5" to={'enrolClass'}> <FaBookOpen></FaBookOpen>  My Enrolled Classes</Link>
                    <Link className="btn btn-outline btn-secondary" to={'payment'}> <FaWallet></FaWallet> Payment</Link>
                    <div className="divider"></div> 
                    <Link className="btn btn-outline btn-secondary" to={'/home'}>Home</Link>
                </>
            }
           
            </ul>
        </div>
        </div>
    );
};

export default Dashboard;