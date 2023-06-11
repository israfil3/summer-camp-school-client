import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import AdminInfo from '../adminInfo/AdminInfo';
const useCart = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = AdminInfo();
    const { refetch, data: carts = []  } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            return res.data;
        }
      })
      return[carts,refetch]
}

export default useCart;