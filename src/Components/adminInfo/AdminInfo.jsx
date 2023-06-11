import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const AdminInfo = () => {
    const {singOut} = useContext(AuthContext)
    const navigate = useNavigate ;

    const axiosSecure = axios.create({
        baseURL:'http://localhost:5000',
    });
    useEffect(()=>{
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('jwt-token');
            if(token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        axiosSecure.interceptors.response.use(
            (response) => response, async (error) => {
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await singOut();
                     navigate('/login')
                }
                return Promise.reject(error);
            }
        );
    },
        [singOut, navigate ,axiosSecure]
    )
    return [axiosSecure];
};

export default AdminInfo;