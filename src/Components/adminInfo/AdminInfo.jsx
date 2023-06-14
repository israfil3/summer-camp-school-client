import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL:'https://server-israfil3.vercel.app',
});
const AdminInfo = () => {
    const {singOut} = useContext(AuthContext)
    const navigate = useNavigate ;


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