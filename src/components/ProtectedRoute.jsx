import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';

export default function ProtectedRoute({children}) {
    const {user}=useContext(UserContext);
    if(!user){
        return <Navigate to='/'/>
    }

  return (
    children
  )
}
