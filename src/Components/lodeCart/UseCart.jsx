import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const useCart = (email) => {
    const {user} = useContext(AuthContext);
    const { refetch, data: carts = []  } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/carts?email=${user.email}`);
            return (await res).json();
        }
      })
      return[carts,refetch]
}

export default useCart;