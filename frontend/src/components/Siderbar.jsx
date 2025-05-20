import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { useLocation } from 'react-router-dom'

const Siderbar = () => {
   const {authUser} = useAuthUser()
   const location = useLocation()
   const currentPath = location.pathname

   console.log( authUser, currentPath);
  return (
    <div>Siderbar</div>
  )
}

export default Siderbar
