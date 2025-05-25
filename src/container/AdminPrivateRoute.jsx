import React from 'react'
import { useAdminContext } from '../context/AdminContext'
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({children}) => {

    const {admin} = useAdminContext();

  return admin ? children : <Navigate to="/admin/login" replace={true} />
    
}

export default AdminPrivateRoute
