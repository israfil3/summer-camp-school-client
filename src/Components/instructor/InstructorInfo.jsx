import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import AdminInfo from '../adminInfo/AdminInfo';
import { useQuery } from '@tanstack/react-query';

const InstructorInfo = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = AdminInfo();
    const {data: isInstructor, isLoading:isInstructorLoading } = useQuery({
        queryKey: ['instructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parson/instructor/${user?.email}`)
            return res.data.instructor
        }
    })
    return [isInstructor,isInstructorLoading]
};

export default InstructorInfo;