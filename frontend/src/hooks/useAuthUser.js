import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAuthUser } from '../lib/api'

const useAuthUser = () => {
   const authUser = useQuery({
    queryKey:["authUser"],  // unique key -> to know when to refetch
    queryFn: getAuthUser,
    retry: false // only fetch once -> auth check
  })

  return {isLoading: authUser.isLoading, authUser: authUser.data?.user}
}

export default useAuthUser
