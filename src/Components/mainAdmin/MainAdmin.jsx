import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import AdminInfo from '../adminInfo/AdminInfo';
import { useQuery } from '@tanstack/react-query';

const MainAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = AdminInfo();
    const {data: isAdmin, isLoading:isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parson/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default MainAdmin;