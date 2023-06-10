import React, { useContext } from 'react';
import { AuthContext } from './provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    if(loader){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;