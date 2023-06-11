import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AdminCk = () => {
    const {user} = useContext(AuthContext)

    // useEffect(()=> {
    //     fetch(`http://localhost:5000/parson/admin/${user.email}`)
    //     .then(res=> res.json())
    //     .then(data => {
    //         setAdmin(data)
    //     })
    // },[])

};

export default AdminCk;