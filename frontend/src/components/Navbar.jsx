import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { useLocation } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout } from '../lib/api'
const Navbar = () => {

   const {authUser} = useAuthUser()
   const location = useLocation()
   const isChatPage = location.pathname?.startsWith("/chat")

   const queryClient = useQueryClient()

   const {mutate: logoutMutation} =useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["authUser"]})
    }
   })

  return (
    <nav>
      
    </nav>
  )
}

export default Navbar
